import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const SongCard = (props) => {
  const [lyric, setLyric] = useState(false)

  return (
    <div className="song-card">
      <ReactPlayer url={props.song.song_link} />
      <h1>{props.song.title}</h1>
      <h2>{props.song.artist}</h2>
      {lyric ? <p>{props.song.lyrics}</p> : null}
      <button onClick={() => setLyric(!lyric)}>Show Lyrics</button>
    </div>
  )
}

export default SongCard
