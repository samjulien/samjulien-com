import React from 'react'
import Img from 'gatsby-image'

export default function PageImage({ image }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Img sizes={image.childImageSharp.fluid} />
    </div>
  )
}
