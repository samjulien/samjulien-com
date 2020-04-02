import React from 'react'
import { css } from '@emotion/core'

const Video = props => {
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
          title="video"
          {...props}
        ></iframe>
      </div>
    </div>
  )
}

export default Video
