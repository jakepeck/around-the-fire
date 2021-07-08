from models.db import db
from datetime import datetime


class Story(db.Model):
    __tablename__ = 'stories'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String, nullable=True)
    content = db.Column(db.Text, nullable=False)
    story_image = db.Column(db.String, nullable=True)
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)

    def __init__(self, title, author, story_image, content):
        self.title = title
        self.author = author
        self.story_image = story_image
        self.content = content

    def json(self):
        return {"id": self.id, "title": self.title, "author": self.author, "story_image": self.story_image, "content": self.content, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self.json()

    @classmethod
    def find_all(cls):
        stories = Story.query.all()
        return stories

    @classmethod
    def find_by_id(cls, story_id):
        story = Story.query.filter_by(id=story_id).first()
        return story
