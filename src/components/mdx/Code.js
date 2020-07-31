/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import theme from 'prism-react-renderer/themes/nightOwl'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import mq from '../../utils/mq'

const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="p-8 sm:mx-0 -mx-5"
            style={{ ...style }}
            css={mq({
              borderRadius: ['0px !important', '0.5rem !important'],
            })}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {/* <span>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default Code
