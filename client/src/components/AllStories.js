import React, { useEffect } from 'react'
import StoryCard from './StoryCard'

const AllStories = (props) => {
  const storyList = props.stories.map((story, index) => {
    return <StoryCard key={index} story={story} />
  })

  return (
    <div>
      <h2>Stories:</h2>
      {storyList}
    </div>
  )
}

export default AllStories
