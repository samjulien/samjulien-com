import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default () => (
  <Layout>
    <Container>
      <h1>
        Yikes!{' '}
        <span role="img" aria-label="grimace emoji">
          😬
        </span>
      </h1>
      <p>You just hit a route that doesn't exist...Sorry!</p>
      <Link to="/" className="button">
        &larr; Back to Safety
      </Link>
    </Container>
  </Layout>
)
