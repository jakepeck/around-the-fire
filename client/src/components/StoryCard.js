import React, { useEffect, useState } from 'react'
import Client from '../services'

const StoryCard = (props) => {
  const [content, setContent] = useState(false)
  const [comments, setComments] = useState([])
  const [showComments, toggleShowComments] = useState(false)
  const [commentForm, setCommentForm] = useState({
    content: '',
    story_id: null
  })

  const handleClick = async (id) => {
    setContent(!content)
    const res = await Client.get(`/stories/${id}`)
    const comments = res.data.comments
    setCommentForm({ ...commentForm, story_id: id })
    setComments(comments)
    console.log('hello')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCommentForm({ ...commentForm, [name]: value })
    console.log(commentForm)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = await Client.post(`/comments`, commentForm)
    setCommentForm({
      ...commentForm,
      content: ''
    })
    setComments([...comments, newComment.data])
  }

  return (
    <div className="story-card">
      <div className="title">
        <h1>{props.story.title}</h1>
      </div>
      <img src={props.story.story_image} alt="storyImg"></img>
      <h2>Author: {props.story.author}</h2>{' '}
      <button onClick={() => handleClick(props.story.id)}>
        {content ? 'collapse story' : 'show story'}
      </button>
      {content ? (
        <div className="details-container">
          <p style={{ whiteSpace: 'pre-line' }}>{props.story.content}</p>
          <button
            className="add-comments-btn"
            onClick={() => toggleShowComments(true)}
          >
            View/Add Comments
          </button>
          {showComments ? (
            <div>
              <div className="comment-input-container">
                <textarea
                  className="comment-input"
                  name="content"
                  placeholder="Add comment here"
                  value={commentForm.content}
                  onChange={handleChange}
                ></textarea>
                <button onClick={handleSubmit}>+ Add Comment</button>
              </div>
              <br />
              {comments.map((comment, index) => (
                <div className="comment-card">Comment: {comment.content}</div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      <br />
      <button
        className="delete-btn"
        onClick={() => props.handleDelete(props.story.id)}
      >
        Delete Story
      </button>
    </div>
  )
}

export default StoryCard
