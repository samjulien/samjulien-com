import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from 'components/Container'

export default ({ children }) => {
  return (
    <Layout>
      <Container
        css={css`
          padding-bottom: 0;
          small {
            display: block;
          }
        `}
      >
        {children}

        <hr />
      </Container>
    </Layout>
  )
}
