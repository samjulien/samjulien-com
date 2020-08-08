import React from 'react'
import Layout from '../components/Layout'
import Container from 'components/Container'
import SEO from 'components/SEO/'

export default ({ children }) => {
  return (
    <Layout>
      <SEO />
      <Container>{children}</Container>
    </Layout>
  )
}
