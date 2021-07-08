import React, { useEffect } from 'react'
import SongCard from './SongCard'

const AllSongs = (props) => {
  const allSongs = props.songs.map((song, index) => {
    return <SongCard key={index} song={song} />
  })

  return (
    <div>
      <h2>Song List:</h2>
      {allSongs}
    </div>
  )
}

export default AllSongs
