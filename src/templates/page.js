import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from 'components/Container'
import SEO from 'components/SEO/'

export default ({ children }) => {
  return (
    <Layout>
      <SEO />
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
