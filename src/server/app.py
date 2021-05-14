from flask import Flask, escape, request, make_response, render_template, redirect, url_for
import sqlite3
app = Flask(__name__)


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


@app.route('/server')
def server():
    con = sqlite3.connect('diplom.db')
    con.row_factory = dict_factory
    cur = con.cursor()
    cur.execute('SELECT * from server')
    data = cur.fetchall()
    print(data)
    con.close()
    resp = make_response({'data': data})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/Angilal')
def Angilal():
    con = sqlite3.connect('diplom.db')
    con.row_factory = dict_factory
    cur = con.cursor()
    cur.execute('SELECT * from Angilal')
    data = cur.fetchall()
    print(data)
    con.close()
    resp = make_response({'data': data})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/ajiltan')
def ajiltan():
    con = sqlite3.connect('diplom.db')
    con.row_factory = dict_factory
    cur = con.cursor()
    cur.execute('SELECT * from ajiltan')
    data = cur.fetchall()
    print(data)
    con.close()
    resp = make_response({'data': data})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/eelj')
def eelj():
    con = sqlite3.connect('diplom.db')
    con.row_factory = dict_factory
    cur = con.cursor()
    cur.execute('SELECT * from eelj')
    data = cur.fetchall()
    print(data)
    con.close()
    resp = make_response({'data': data})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/tailan')
def tailan():
    con = sqlite3.connect('diplom.db')
    con.row_factory = dict_factory
    cur = con.cursor()
    cur.execute('SELECT * from tailan')
    data = cur.fetchall()
    print(data)
    con.close()
    resp = make_response({'data': data})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/salbar')
def salbar():
    con = sqlite3.connect('diplom.db')
    con.row_factory = dict_factory
    cur = con.cursor()
    cur.execute('SELECT * from salbar')
    data = cur.fetchall()
    print(data)
    con.close()
    resp = make_response({'data': data})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == '__main__':
    app.run(debug=True)
