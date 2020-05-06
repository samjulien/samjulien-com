import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

export default function PageImage({ image }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Img sizes={image.childImageSharp.fluid} />
    </div>
  )
}
