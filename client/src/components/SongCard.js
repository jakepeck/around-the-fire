import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const SongCard = (props) => {
  const [lyric, setLyric] = useState(false)

  return (
    <div className="song-card">
      <ReactPlayer url={props.song.song_link} />
      <h1>{props.song.title}</h1>
      <h2>{props.song.artist}</h2>
      {lyric ? (
        <p
          style={{
            whiteSpace: 'pre-line',
            overflowY: 'scroll',
            height: '200px',
            width: '100%'
          }}
        >
          {props.song.lyrics}
        </p>
      ) : null}
      <button onClick={() => setLyric(!lyric)}>Show Lyrics</button>
      <button onClick={() => props.handleSongDelete(props.song.id)}>
        Delete
      </button>
    </div>
  )
}

export default SongCard
