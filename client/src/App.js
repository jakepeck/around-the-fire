import './App.css'
import './Meg.css'
import { Switch, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Client from './services'
import AllSongs from './components/AllSongs'
import AllStories from './components/AllStories'

function App() {
  const [stories, setStories] = useState([])
  const [selectedStory, setSelectedStory] = useState(null)
  const [songs, setSongs] = useState([])
  const [selectedSong, setSelectedSong] = useState(null)
  const [expandSongs, toggleExpandSongs] = useState(false)
  const [expandStories, toggleExpandStories] = useState(false)

  const getStories = async () => {
    let res = await Client.get('/stories')
    console.log(res.data)
    setStories(res.data)
  }

  const getSongs = async () => {
    let res = await Client.get('/songs')
    console.log(res.data)
    setSongs(res.data)
  }

  const handleClickedStories = () => {
    toggleExpandStories(true)
    console.log(expandStories)
  }

  const handleClickedSongs = () => {
    toggleExpandSongs(true)
    console.log(expandSongs)
  }

  useEffect(() => {
    getStories()
    getSongs()
  }, [])

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
      {/* <AllStories stories={stories} />
      <AllSongs songs={songs} /> */}
    </div>
  )
}

export default App
