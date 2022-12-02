from flask import Flask
import pandas as pd
import numpy as np
from sqlalchemy import create_engine, text

app = Flask(__name__)

PASSWORD ="moviestat123"
PUBLIC_IP_ADDRESS ="34.28.217.152:3306"
DBNAME ="movieDB"
PROJECT_ID ="light-mountain-365203"
INSTANCE_NAME ="movie348"

url = f"mysql+pymysql://root:{PASSWORD}@{PUBLIC_IP_ADDRESS}/{DBNAME}?"#unix_socket=/cloudsql/{PROJECT_ID}:{INSTANCE_NAME}"
app.config["SQLALCHEMY_DATABASE_URI"] = url
engine = create_engine(url)
connection = engine.connect()

@app.route("/actor",methods=['GET', 'POST'])
def populateCountries():
    covidQuery = "select stage from actor"
    covidDF = pd.read_sql_query(text(covidQuery), engine)
    connection.close()
    engine.dispose()
    return covidDF.to_json()