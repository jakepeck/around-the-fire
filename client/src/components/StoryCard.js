import React, { useEffect } from 'react'

const StoryCard = (props) => {
  return (
    <div className="story-card">
      <img src={props.story.story_image} alt="storyImg"></img>
      <h1>{props.story.title}</h1>
      <h2>{props.story.author}</h2>
      <p>{props.story.content}</p>
    </div>
  )
}

export default StoryCard
