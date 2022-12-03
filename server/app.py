import cfgReader
from flask import Flask, request
import pandas as pd
import numpy as np
from sqlalchemy import create_engine, text

app = Flask(__name__)

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
    firstName = request.json.get('firstName')
    lastName = request.json.get('lastName')
    password = request.json.get('password')
    movieQuery = f"insert into users Values('{username}', '{firstName}', '{lastName}', '{password}')"
    engine.execute(text(movieQuery))

    #movieDF = pd.read_sql_query(text(movieQuery), engine, params={'username':username, "firstName":firstName, "lastName":lastName, "password":password})
    connection.close()
    engine.dispose()
    return "Inserted"