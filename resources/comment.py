from flask import request
from flask_restful import Resource
from models.comment import Comment
from models.db import db

# from sqlalchemy.orm import joinedload

class Comments(Resource):
    def post(self):
      data = request.get_json()
      comment = Comment(**data)
      comment.create()
      return comment.json(), 201