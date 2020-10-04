import time
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import b64tools

app = Flask(__name__)
api = Api(app)
CORS(app)

# @app.route('/api')
# def get_current_time():
#     return {'time': time.time()}

class upload(Resource):
    def post(self):
        user = request.json["user_id"]
        image = request.json["imageb64string"]
        b64tools.decode(image)
        # print(type(info))
        # print(info)
        return ({'data' : user})
        
api.add_resource(upload, '/api/<string:user_id>')
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)