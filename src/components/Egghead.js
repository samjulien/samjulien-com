import React from 'react'
import { css } from '@emotion/core'

const Egghead = ({ url }) => {
  const plainUrl = url.replace('/embed', '')
  return (
    <div
      css={css`
        margin: 20px 0;
      `}
    >
      <div
        css={css`
          position: relative;
          overflow: hidden;
          padding-top: 56.25%;
        `}
      >
        <iframe
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          `}
          src={url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
        />
      </div>
      <div
        css={css`
          padding: 5px;
          margin-top: 10px;
        `}
      >
        <a href={plainUrl} target="blank">
          Watch on egghead
        </a>
      </div>
    </div>
  )
}

export default Egghead
