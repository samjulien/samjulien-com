import React from 'react'
import Video from './Video'

const YouTube = ({ shortCode }) => {
  return (
    <Video
      src={`https://www.youtube.com/embed/${shortCode}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default YouTube
