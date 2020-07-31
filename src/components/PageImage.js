import React from 'react'
import Img from 'gatsby-image'

export default function PageImage({ image }) {
  return (
    <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
      <Img sizes={image.childImageSharp.fluid} />
    </div>
  )
}
