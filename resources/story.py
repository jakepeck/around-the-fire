from flask import request
from flask_restful import Resource
from models.story import Story
from models.comment import Comment
from models.db import db
from sqlalchemy.orm import joinedload


class Stories(Resource):
    def get(self):
        stories = Story.find_all()
        return [s.json() for s in stories], 200

    def post(self):
        data = request.get_json()
        story = Story(**data)
        story.create()
        return story.json(), 201



    #     class UserDetail(Resource):
    # def get(self, user_id):
    #     user = User.query.options(joinedload(
    #         'posts')).filter_by(id=user_id).first()
    #     posts = [p.json() for p in user.posts]
    #     return {**user.json(), "posts": posts}


class StoryDetail(Resource):
    def get(self, story_id):
        story = Story.query.options(joinedload('comments')).filter_by(id=story_id).first()
        comments = [c.json() for c in story.comments]
        return {**story.json(), "comments": comments}, 200

    def put(self, story_id):
        data = request.get_json()
        # print(data)
        story = Story.find_by_id(story_id)
        if not story:
            return {"msg": "Story not found"}, 404
        for k in data.keys():
            setattr(story, k, data[k])
        db.session.commit()
        return story.json(), 200

    def delete(self, story_id):
        story = Story.find_by_id(story_id)
        if not story:
            return {"msg": "Story not found"}, 404
        db.session.delete(story)
        db.session.commit()
        return {"msg": "Story Deleted", "payload": story_id}
