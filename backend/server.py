from flask import Flask
from flask_cors import CORS
import json
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql = MySQL(app)
CORS(app)
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '$uryA11472'
app.config['MYSQL_DB'] = 'dataUpload'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

@app.route('/')
def check():
    return "1stapi"

from Blueprint_auth import auth

app.register_blueprint(auth,url_prefix="/auth")
