import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default () => (
  <Layout noFooter>
    <Container className="px-5 mx-auto min-h-screen absolute z-0 top-0 w-full flex flex-col items-center justify-center text-center">
      <div className="max-w-screen-sm">
        <h2 className="text-4xl leading-tight">
          Thanks for subscribing!{' '}
          <span role="img" aria-label="tada emoji">
            🎉
          </span>{' '}
          You'll hear from me soon.
        </h2>
        <Link to="/" className="mt-16 block">
          Take me home!
        </Link>
      </div>
    </Container>
  </Layout>
)
