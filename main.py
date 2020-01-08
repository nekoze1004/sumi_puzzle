from flask import Flask, make_response, jsonify, request
import string
import time
import datetime
import sqlite3
import os
import random

app = Flask(__name__)
db_write = "INSERT INTO result(name, ruijido, result_img_path) VALUES(?, ?, ?)"


def init_db():
    if os.path.exists("puzzle_result_DB.db"):
        db = sqlite3.connect("puzzle_result_DB.db")
        cursor = db.cursor()
    else:
        db = sqlite3.connect("puzzle_result_DB.db")
        cursor = db.cursor()
        cursor.execute("CREATE TABLE result(name, ruijido, result_img_path)")
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
    _, x, y = raw_data.split("_")
    x = int(x)
    y = int(y)
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
    parts = {"ear_left": parts_purge(earl),
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
    print(parts)
    # 画像合成の始まり
    
    # ここで類似度計算をする
    ruijido = random.randint(0, 100)

    # DB書き込み
    db, cursor = init_db()
    cursor.execute(db_write, (name, ruijido, "./hogehoge.png"))
    db.commit()

    html = open("./html/result.html", "r", encoding="utf-8").read()
    context = {"name": name,
               "ruijido": ruijido}

    html = string.Template(html)
    html = html.substitute(context)
    return html


@app.route("/ranking/", methods=["GET"])
def ranking():
    name = request.args.get("name")
    html = open("./html/ranking.html", "r", encoding="utf-8").read()

    # 読み込んだDBからランキング情報をリストで返す
    db, cursor = init_db()
    cursor.execute("select * from result ORDER BY ruijido DESC")
    db_result = cursor.fetchall()

    li = ""
    for i in db_result:
        li += f"""<li>
                    {i[0]}
                    {i[1]}
                    {i[2]}
                </li>"""

    context = {"name": name,
               "li": li
               }
    html = string.Template(html)
    html = html.substitute(context)
    return html


if __name__ == '__main__':
    app.run(host="localhost", port=39101, threaded=True)
