import React, { useEffect } from 'react'
import SongCard from './SongCard'
import { Modal } from 'react-rainbow-components'

const AllSongs = (props) => {
  const {
    toggleExpandSongs,
    handleSongDelete,
    toggleModalOpen,
    modalOpen,
    handleChangeSong,
    postSong,
    songForm
  } = props

  const allSongs = props.songs.map((song, index) => {
    return (
      <SongCard key={index} song={song} handleSongDelete={handleSongDelete} />
    )
  })

  return (
    <div className="all-songs">
      <div className="btns-container">
        <button onClick={() => toggleExpandSongs(false)}>BACK TO HOME</button>
        <button onClick={() => toggleModalOpen(true)}>CONTRIBUTE SONG</button>
      </div>
      <h2>Song List:</h2>
      {allSongs}
      <Modal isOpen={modalOpen} onRequestClose={() => toggleModalOpen(false)}>
        <form onSubmit={postSong}>
          <input
            type="text"
            name="title"
            placeholder="Song Title"
            value={songForm.title}
            onChange={handleChangeSong}
          ></input>
          <input
            type="text"
            name="artist"
            placeholder="Song Artist"
            value={songForm.artist}
            onChange={handleChangeSong}
          ></input>
          <input
            type="text"
            name="song_link"
            placeholder="Song Youtube Link"
            value={songForm.song_link}
            onChange={handleChangeSong}
          ></input>
          <textarea
            name="lyrics"
            placeholder="Song Lyrics"
            className="story-input"
            value={songForm.lyrics}
            onChange={handleChangeSong}
          ></textarea>
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AllSongs
