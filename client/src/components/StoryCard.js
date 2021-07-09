import React, { useEffect, useState } from 'react'
import Client from '../services'

const StoryCard = (props) => {
  const [content, setContent] = useState(false)
  const [comments, setComments] = useState([])
  const [showComments, toggleShowComments] = useState(false)

  const handleClick = async (id) => {
    setContent(!content)
    const res = await Client.get(`/stories/${id}`)
    const comments = res.data.comments
    setComments(comments)
  }

  return (
    <div className="story-card">
      <img src={props.story.story_image} alt="storyImg"></img>
      <h1>{props.story.title}</h1>
      <h2>{props.story.author}</h2>
      {content ? (
        <div>
          <p style={{ whiteSpace: 'pre-line' }}>{props.story.content}</p>
          <button onClick={() => toggleShowComments(true)}>
            View comments
          </button>
          {showComments ? (
            <div>
              <button>+ Add Comment</button>
              <br />
              {comments.map((comment, index) => (
                <div className="comment-card">Comment: {comment.content}</div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <button onClick={() => handleClick(props.story.id)}>Show Story</button>
      <button onClick={() => props.handleDelete(props.story.id)}>
        Delete Story
      </button>
    </div>
  )
}

export default StoryCard
