import cfgReader
from flask import Flask
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

@app.route("/actor",methods=['GET', 'POST'])
def getActorNames():
    movieQuery = "select stage from actor"
    movieDF = pd.read_sql_query(text(movieQuery), engine)
    connection.close()
    engine.dispose()
    return movieDF.to_json()