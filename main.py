from flask import Flask, make_response, jsonify, request
import string
import time

app = Flask(__name__)


@app.route("/hello/<string:value>", methods=["GET"])
def hello(value):
    result = f"hello {value}"
    print(f"[start] {result}")

    time.sleep(10)

    print(f"[end] {result}")
    return make_response(result)


@app.route("/")
def title():
    html = open("./html/index.html", "r", encoding="utf-8").read()
    print("title")
    return html


@app.route("/puzzle/", methods=["GET"])
def puzzle():
    print("puzzle")
    name = request.args.get("name")

    html = open("./html/puzzle.html", "r", encoding="utf-8").read()
    context = {"name": name}

    html = string.Template(html)
    html = html.substitute(context)
    return html


@app.route("/result/", methods=["GET"])
def result():
    name = request.args.get("name")
    print(name)
    # ここで類似度計算をする
    ruijido = 30.5

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

    # 読み込んだcsvからランキング情報をリストで返す
    li = ""
    for i in range(10):
        li += f"""<li>
                    {name}
                    類所度
                    画像
                </li>"""

    context = {"name": name,
               "li":li
    }
    html = string.Template(html)
    html = html.substitute(context)
    return html


if __name__ == '__main__':
    app.run(host="localhost", port=39101, threaded=True)
