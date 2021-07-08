from models.db import db
from datetime import datetime


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    artist = db.Column(db.String, nullable=True)
    song_link = db.Column(db.String, nullable=True)
    lyrics = db.Column(db.Text, nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)

    def __init__(self, title, artist, song_link, lyrics):
        self.title = title
        self.artist = artist
        self.song_link = song_link
        self.lyrics = lyrics

    def json(self):
        return {"title": self.title, "artist": self.artist, "song_link": self.song_link, "lyrics": self.lyrics, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self.json()

    @classmethod
    def find_all(cls):
        songs = Song.query.all()
        return [song.json() for song in songs]

    @classmethod
    def find_by_id(cls, song_id):
        song = Song.query.filter_by(id=song_id).first()
        return song
