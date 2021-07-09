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
            overflowY: 'scroll'
          }}
        >
          {props.song.lyrics}
        </p>
      ) : null}
      <div className="btns-container">
        <button onClick={() => setLyric(!lyric)}>SHOW LYRICS</button>
        <button onClick={() => props.handleSongDelete(props.song.id)}>
          DELETE SONG
        </button>
      </div>
    </div>
  )
}

export default SongCard
