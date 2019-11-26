import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default ({ children }) => (
  <Layout>
    <Container>
      {children}
      <hr />
    </Container>
  </Layout>
)
