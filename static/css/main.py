from flask import Flask, make_response, jsonify, request
import string
import time
import datetime
import sqlite3
import os
import random
import cv2

app = Flask(__name__)
db_write = "INSERT INTO result(name, result_img_path) VALUES(?, ?)"


def init_db():
    if os.path.exists("puzzle_result_DB.db"):
        db = sqlite3.connect("puzzle_result_DB.db")
        cursor = db.cursor()
    else:
        db = sqlite3.connect("puzzle_result_DB.db")
        cursor = db.cursor()
        cursor.execute("CREATE TABLE result(name, result_img_path)")
    return db, cursor


@app.route("/")
def title():
    html = open("./html/index.html", "r", encoding="utf-8").read()
    return html


@app.route("/puzzle/", methods=["GET"])
def puzzle():
    name = request.args.get("name")

    html = open("./html/puzzle.html", "r", encoding="utf-8").read()
    context = {"name": name}

    html = string.Template(html)
    html = html.substitute(context)
    return html


def parts_purge(raw_data):
    try:
        _, x, y = raw_data.split("_")
        x = int(x)
        y = int(y)
    except Exception as e:
        x = 1000
        y = 1000
    return (x, y)


@app.route("/result/", methods=["GET"])
def result():
    name = request.args.get("name")
    earl = request.args.get("earl")
    earr = request.args.get("earr")
    eyel = request.args.get("eyel")
    eyer = request.args.get("eyer")
    hairl = request.args.get("hairl")
    hairr = request.args.get("hairr")
    higel = request.args.get("higel")
    higer = request.args.get("higer")
    higec = request.args.get("higec")
    mayul = request.args.get("mayul")
    mayur = request.args.get("mayur")
    mous = request.args.get("mous")
    nose_ = request.args.get("nose_")

    # 各パーツの座標を辞書型で保持する
    parts_xy = {"ear_left": parts_purge(earl),
                "ear_right": parts_purge(earr),
                "eye_left": parts_purge(eyel),
                "eye_right": parts_purge(eyer),
                "hair_left": parts_purge(hairl),
                "hair_right": parts_purge(hairr),
                "hige_center": parts_purge(higec),
                "hige_left": parts_purge(higel),
                "hige_right": parts_purge(higer),
                "mayu_left": parts_purge(mayul),
                "mayu_right": parts_purge(mayur),
                "mouse": parts_purge(mous),
                "nose": parts_purge(nose_)}
    print(parts_xy)
    # 画像合成の始まり
    base_img = cv2.imread("./static/img/face2.png")
    base_img = cv2.resize(base_img, (300, 380))
    for p in parts_xy.keys():
        parts_img = cv2.imread(f"./static/img/{p}.png", -1)
        p_x, p_y, _ = parts_img.shape
        mask = parts_img[:, :, 3]
        mask = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR)
        mask = mask // 255
        parts_img = parts_img[:, :, :3]

        x_offset = parts_xy[p][0]
        y_offset = parts_xy[p][1]

        base_x, base_y, _ = base_img.shape
        parts_start_x = 0
        parts_start_y = 0
        parts_end_x = p_x
        parts_end_y = p_y

        base_start_x = x_offset
        base_start_y = y_offset
        base_end_x = p_x + x_offset
        base_end_y = p_y + y_offset

        if x_offset > base_x or y_offset > base_y:  # base画像の中にパーツが明らかに入っていない場合はスキップする
            continue

        if 0 > x_offset:
            parts_start_x = abs(x_offset)
            base_start_x = 0

        if 0 > y_offset:
            parts_start_y = abs(y_offset)
            base_start_y = 0

        if base_x < p_x + x_offset:
            parts_cat_x = p_x + x_offset - base_x
            base_cat_x = base_x
            print(f"{p} baseX < p_x + x_offset {parts_cat_x} {base_cat_x}")

        if base_y < p_y + y_offset:
            parts_cat_y = p_y + y_offset - base_y
            base_cat_y = base_y
            print(f"{p} baseY < p_y + y_offset {parts_cat_y} {base_cat_y}")

        try:
            base_img[base_start_x:base_end_x, base_start_y:base_end_y] \
                += parts_img[parts_start_x:parts_end_x, parts_start_y:parts_end_y] \
                   * mask[parts_start_x:parts_end_x, parts_start_y:parts_end_y]
        except Exception as e:
            print(f"{e} parts_name:{p}")
            print(f"base_img[{base_start_x}:{base_end_x}, {base_start_y}:{base_end_y}] \
                += parts_img[{parts_start_x}:{parts_end_x}, {parts_start_y}:{parts_end_y}] \
                   * mask[{parts_start_x}:{parts_end_x}, {parts_start_y}:{parts_end_y}]")

    now = datetime.datetime.now()
    now.strftime("%Y/%m/%d %H:%M:%S")
    filename = f'{name}_{now.strftime("%Y%m%d_%H%M%S")}'
    cv2.imwrite(f"./static/result_img/{filename}.png", base_img)

    # ここで類似度計算をする
    # ruijido = random.randint(0, 100)
    # 類似度は廃止

    # DB書き込み
    db, cursor = init_db()
    cursor.execute(db_write, (name, f"../static/result_img/{filename}.png"))
    db.commit()

    html = open("./html/result.html", "r", encoding="utf-8").read()
    context = {"name": name,
               "img_path": f'<img src="../static/result_img/{filename}.png">'}

    html = string.Template(html)
    html = html.substitute(context)
    return html


@app.route("/ranking/", methods=["GET"])
def ranking():
    name = request.args.get("name")
    html = open("./html/ranking.html", "r", encoding="utf-8").read()

    # 読み込んだDBから名前とPath情報をリストで返す
    db, cursor = init_db()
    cursor.execute("select * from result")
    db_result = cursor.fetchall()

    tr = ""
    for d in db_result:
        tr += f"""<tr>
                    <td>{d[0]}</td>
                    <td><img src="{d[1]}"></td>
                </tr>"""

    context = {"name": name,
               "tr": tr
               }
    html = string.Template(html)
    html = html.substitute(context)
    return html


if __name__ == '__main__':
    app.run(host="192.168.1.65", port=39101, threaded=True)
