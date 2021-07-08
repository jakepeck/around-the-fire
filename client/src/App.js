import './App.css'
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

  useEffect(() => {
    getStories()
    getSongs()
  }, [])

  return (
    <div className="App">
      Homepage
      <AllStories stories={stories} />
      <AllSongs songs={songs} />
    </div>
  )
}

export default App
