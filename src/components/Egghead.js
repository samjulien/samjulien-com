import React from 'react'
import { css } from '@emotion/core'
import Video from './Video'

const Egghead = ({ url }) => {
  const plainUrl = url.replace('/embed', '')
  return (
    <>
      <Video
        src={url}
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
      />
      <div
        css={css`
          padding: 5px;
          margin-top: 10px;
          margin-bottom: 10px;
        `}
      >
        <a href={plainUrl} target="blank">
          Watch on egghead
        </a>{' '}
        🥚
      </div>
    </>
  )
}

export default Egghead
