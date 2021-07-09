import React, { useEffect } from 'react'
import StoryCard from './StoryCard'
import { Modal } from 'react-rainbow-components'

const AllStories = (props) => {
  const {
    stories,
    handleDelete,
    handleChangeStory,
    storyForm,
    toggleModalOpen,
    modalOpen,
    postStory
  } = props

  const storyList = stories.map((story, index) => {
    return <StoryCard key={index} story={story} handleDelete={handleDelete} />
  })

  return (
    <div>
      <button onClick={() => toggleModalOpen(true)}>Contribute Story</button>
      <h2>Stories:</h2>
      <div>{storyList}</div>
      <Modal isOpen={modalOpen} onRequestClose={() => toggleModalOpen(false)}>
        <form onSubmit={postStory}>
          <input
            name="title"
            placeholder="Story Title"
            value={storyForm.title}
            onChange={handleChangeStory}
          ></input>
          <input
            name="author"
            placeholder="Story Author"
            value={storyForm.author}
            onChange={handleChangeStory}
          ></input>
          <input
            name="story_image"
            placeholder="Story Image"
            value={storyForm.story_image}
            onChange={handleChangeStory}
          ></input>
          <input
            name="content"
            placeholder="Story"
            value={storyForm.content}
            onChange={handleChangeStory}
          ></input>
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AllStories
