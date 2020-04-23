import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Message from '../components/ConfirmMessage/Message'

export default () => (
  <Layout noFooter>
    <Container>
      <Message
        title="Thanks for subscribing! 🎉"
        body="You'll hear from me soon."
      >
        <Link to="/" aria-label="Visit blog page" className="button-secondary">
          Take me home!
        </Link>
      </Message>
    </Container>
  </Layout>
)
