import React, { useEffect, useState } from 'react'
import Client from '../services'

const StoryCard = (props) => {
  const [content, setContent] = useState(false)

  const handleClick = async (id) => {
    setContent(!content)
    const res = await Client.get(`/stories/${id}`)
    const comments = res.data.comments
    console.log(comments)
  }

  return (
    <div className="story-card">
      <img src={props.story.story_image} alt="storyImg"></img>
      <h1>{props.story.title}</h1>
      <h2>{props.story.author}</h2>
      {content ? (
        <p style={{ whiteSpace: 'pre-line' }}>{props.story.content}</p>
      ) : null}

      <button onClick={() => handleClick(props.story.id)}>Show Story</button>
      <button onClick={() => props.handleDelete(props.story.id)}>
        Delete Story
      </button>
    </div>
  )
}

export default StoryCard
