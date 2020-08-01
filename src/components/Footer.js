import React from 'react'

import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub } from './Social'
import Container from './Container'

const Footer = ({ author, noSubscribeForm }) => (
  <footer className="sm:pt-16 sm:pb-16 pb-5 pt-16">
    <Container>
      {!noSubscribeForm && <SubscribeForm />}
      <div className="flex items-center justify-between mt-20">
        <div>{author && `${author} \u00A9 ${new Date().getFullYear()}`}</div>
        <div className="flex items-center">
          <Twitter />
          <GitHub />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
