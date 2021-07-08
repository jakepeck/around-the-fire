from flask import request
from flask_restful import Resource
from models.song import Song
from models.db import db
# from sqlalchemy.orm import joinedload


class Songs(Resource):
    def get(self):
        songs = Song.find_all()
        return [s.json() for s in songs], 200

    def post(self):
        data = request.get_json()
        song = Song(**data)
        song.create()
        return song.json(), 201


class SongDetail(Resource):
    def get(self, song_id):
        song = Song.find_by_id(song_id)
        return {**song.json()}, 200

    def put(self, song_id):
        data = request.get_json()
        print(data)
        song = Song.find_by_id(song_id)
        if not song:
            return {"msg": "song not found"}, 404
        for k in data.keys():
            setattr(song, k, data[k])
        db.session.commit()
        return song.json(), 200

    def delete(self, song_id):
        song = Song.find_by_id(song_id)
        if not song:
            return {"msg": "song not found"}, 404
        db.session.delete(song)
        db.session.commit()
        return {"msg": "Song Deleted", "payload": song_id}
