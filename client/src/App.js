import './App.css'
import './Meg.css'
import { Switch, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Client from './services'
import AllSongs from './components/AllSongs'
import AllStories from './components/AllStories'
import { Modal } from 'react-rainbow-components'

function App() {
  const [stories, setStories] = useState([])
  const [selectedStory, setSelectedStory] = useState(null)
  const [songs, setSongs] = useState([])
  const [selectedSong, setSelectedSong] = useState(null)
  const [expandSongs, toggleExpandSongs] = useState(false)
  const [expandStories, toggleExpandStories] = useState(false)
  const [modalOpen, toggleModalOpen] = useState(false)
  const [storyForm, setStoryForm] = useState({
    title: '',
    author: '',
    story_image: '',
    content: ''
  })

  const getStories = async () => {
    let res = await Client.get('/stories')
    setStories(res.data)
  }

  const getSongs = async () => {
    let res = await Client.get('/songs')
    console.log(res.data)
    setSongs(res.data)
  }

  const handleClickedStories = () => {
    toggleExpandStories(true)
  }

  const handleClickedSongs = () => {
    toggleExpandSongs(true)
  }

  const handleStoryDelete = async (id) => {
    await Client.delete(`/stories/${id}`)
    let currentStories = [...stories].filter((story) => story.id !== id)
    setStories(currentStories)
  }

  const handleChangeStory = (e) => {
    const { name, value } = e.target
    setStoryForm({ ...storyForm, [name]: value })
  }

  const postStory = async (e) => {
    e.preventDefault()
    console.log(storyForm.story_image)
    const newStory = await Client.post(`/stories`, storyForm)
    setStoryForm({
      title: '',
      author: '',
      story_image: '',
      content: ''
    })
    console.log(newStory)
    toggleModalOpen(false)
    setStories([...stories, newStory.data])
  }

  useEffect(() => {
    getStories()
    getSongs()
  }, [])

  if (expandStories) {
    return (
      <AllStories
        stories={stories}
        handleDelete={handleStoryDelete}
        handleChangeStory={handleChangeStory}
        storyForm={storyForm}
        toggleModalOpen={toggleModalOpen}
        modalOpen={modalOpen}
        postStory={postStory}
      />
    )
  }
  if (expandSongs) {
    return <AllSongs songs={songs} />
  }
  return (
    <div className="main-wrapper">
      <div className="left">
        <div onClick={handleClickedStories} className="story-btn">
          STORIES
        </div>
        <img
          className="fiya"
          src="https://media1.giphy.com/media/UqUHuT6y9mK5HfsYFm/giphy.gif?cid=6c09b952a8nhlnlmupyayo2031aorn6k5zva5ee5ay5d6goj&rid=giphy.gif&ct=s"
        />
      </div>
      <div className="right">
        <div onClick={handleClickedSongs} className="songs-btn">
          SONGS
        </div>
      </div>
    </div>
  )
}

export default App
