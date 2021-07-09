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
    postStory,
    toggleExpandStories
  } = props

  const storyList = stories.map((story, index) => {
    return <StoryCard key={index} story={story} handleDelete={handleDelete} />
  })

  return (
    <div className="all-stories">
      <div>
        <button onClick={() => toggleExpandStories(false)}>Back to Home</button>
        <button onClick={() => toggleModalOpen(true)}>Contribute Story</button>
      </div>
      <h2>Stories:</h2>
      <div>{storyList}</div>
      <Modal
        className="modal"
        isOpen={modalOpen}
        onRequestClose={() => toggleModalOpen(false)}
      >
        <form onSubmit={postStory}>
          <h1>Add a Scary Story</h1>
          <input
            type="text"
            name="title"
            placeholder="Story Title"
            value={storyForm.title}
            onChange={handleChangeStory}
          ></input>
          <input
            type="text"
            name="author"
            placeholder="Story Author"
            value={storyForm.author}
            onChange={handleChangeStory}
          ></input>
          <input
            type="text"
            name="story_image"
            placeholder="Story Image"
            value={storyForm.story_image}
            onChange={handleChangeStory}
          ></input>
          <textarea
            name="content"
            placeholder="Story"
            className="story-input"
            value={storyForm.content}
            onChange={handleChangeStory}
          ></textarea>
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AllStories
