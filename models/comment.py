
from models.db import db
from datetime import datetime

class Comment(db.Model):
  __tablename__= 'comments'
  story_id = db.Column(db.Integer, db.ForeignKey('stories.id'), nullable=False)
  id = db.Column(db.Integer, primary_key=True)
  content = db.Column(db.String(255), nullable=False )
  created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
  updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
  story = db.relationship("Story", backref=db.backref('stories', lazy=True))


  def __init__(self, content, story_id):
      self.content = content 
      self.story_id = story_id

  def json(self):
    return {
      "id": self.id,
      "content": self.content,
      "story_id": self.story_id,
      "created_at": str(self.created_at), 
      "updated_at": str(self.updated_at)
  }

  def create(self):
    db.session.add(self)
    db.session.commit()
    return self

  @classmethod
  def find_by_id(cls,story_id):
      comment = Comment.query.filter_by(id=story_id).first()
      return comment