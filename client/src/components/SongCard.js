import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'

const SongCard = (props) => {
  return (
    <div className="song-card">
      <ReactPlayer url={props.song.song_link} />
      <h1>{props.song.title}</h1>
      <h2>{props.song.artist}</h2>
      <p>{props.song.lyrics}</p>
    </div>
  )
}

export default SongCard
