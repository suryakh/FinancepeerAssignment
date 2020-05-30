from flask import Blueprint
from flask import request,jsonify
import jwt
import json
from server import mysql



fileUpload = Blueprint('fileUpload',__name__,static_url_path="/static")


@fileUpload.route('/files',methods = ["POST"])
def fileuploading():
    f = request.files['file']
    token = request.headers.get('Authorization')
    encoded_Data = token.split(' ')[0]
    try:
        decode_data = jwt.decode(encoded_Data,'users',algorithms=['HS256'])
        location = "static/"+f.filename
        f.save(location)
        data = json.loads(open("static/"+f.filename).read())
        for p in data:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """INSERT INTO usersDetails (title,body,userId,loginUserid) values(%s ,%s, %s,%s)""",(p['title'],p['body'],p['userId'],decode_data['id'])
            )
            mysql.connection.commit()
            cursor.close()
        return json.dumps({"path":f.filename})
    except:
        return "error",400


