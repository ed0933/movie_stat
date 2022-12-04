import cfgReader
from flask import Flask, request
import pandas as pd
import numpy as np
from sqlalchemy import create_engine, text
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


config = cfgReader.read_config()
PASSWORD = config['Cloud']['PASSWORD']
PUBLIC_IP_ADDRESS = config['Cloud']['PUBLIC_IP_ADDRESS']
DBNAME = config['Cloud']['DBNAME']

url = f"mysql+pymysql://root:{PASSWORD}@{PUBLIC_IP_ADDRESS}/{DBNAME}?"
app.config["SQLALCHEMY_DATABASE_URI"] = url
engine = create_engine(url)
connection = engine.connect()

@app.route("/populateActors",methods=['GET', 'POST'])
def populateActors():
    movieQuery = "select stage from actor"
    movieDF = pd.read_sql_query(text(movieQuery), engine)
    connection.close()
    engine.dispose()
    return movieDF.to_json()

@app.route("/populateMovies",methods=['GET', 'POST'])
def populateMovies():
    movieQuery = "select title from movies"
    movieDF = pd.read_sql_query(text(movieQuery), engine)
    connection.close()
    engine.dispose()
    return movieDF.to_json()

@app.route("/getActorInfo",methods=['GET', 'POST'])
def getActorInfo():
    stage = request.json.get('stage')
    movieQuery = "select * from actor where stage = :stage"
    movieDF = pd.read_sql_query(text(movieQuery), engine, params={'stage':stage})
    connection.close()
    engine.dispose()
    return movieDF.to_json()

@app.route("/insertUser",methods=['GET', 'POST'])
def insertUser():
    username = request.json.get('username')
    password = request.json.get('password')
    movieQuery = f"insert into users Values('{username}', '{password}')"
    engine.execute(text(movieQuery))
    connection.close()
    engine.dispose()
    return "Inserted"

@app.route("/ratings",methods=['GET', 'POST'])
def rating():
    userId = request.json.get('username')
    movieId = request.json.get('movieId')
    rating = request.json.get('rating')
    timestamp = request.json.get('timestamp')
    movieQuery = f"insert into ratings Values('{username}','{movieId}', '{rating}', '{timestamp}')"
    movieDF = pd.read_sql_query(text(movieQuery), engine, params={'username':username, 'movieId':movieId, 'rating':rating, 'timestamp':timestamp})
    engine.execute(text(movieQuery))
    connection.close()
    engine.dispose()
    return "Rating inserted"

@app.route("/actorInMovie",methods=['GET', 'POST'])
deg rating():
    actor = request.json.get('actor')
    movieQuery = "select m.title, m.popularity from movies m join credits c on m.id = c.id where c.crew LIKE '%:actor%' order by m.popularity DESC"
    movieDF = pd.read_sql_query(text(movieQuery), engine, param={'actor':actor})
    connection.close()
    engine.dispose()

@app.route("/checkLogin",methods=['GET', 'POST'])
def checkLogin():
    username = request.json.get('username')
    password = request.json.get('password')
    movieQuery = f"select * from users where username = '{username}' and password = '{password}'"
    movieDF = pd.read_sql_query(text(movieQuery), engine)
    connection.close()
    engine.dispose()
    return movieDF.to_json()
