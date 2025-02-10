import React from 'react'
import ReactPlayer from 'react-player'

function Videos() {
  return (

    <ReactPlayer 
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
      controls
      width="100%"
      height="430px"
    />
  )
}

export default Videos