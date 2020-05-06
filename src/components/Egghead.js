import React from 'react'
import { css } from '@emotion/core'
import Video from './Video'

const Egghead = ({ url }) => {
  const plainUrl = url.replace('/embed', '')
  return (
    <>
      <Video src={url} frameBorder="0" allow="autoplay" allowFullScreen>
        <div
          css={css`
            padding: 5px;
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 0.9rem;
            text-align: left;
          `}
        >
          <a href={plainUrl} target="blank">
            Watch on egghead
          </a>{' '}
          🥚
        </div>
      </Video>
    </>
  )
}

export default Egghead
