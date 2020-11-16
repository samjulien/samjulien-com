import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export default function CustomLink({ children, href }) {
  if (href.startsWith('/')) {
    return <GatsbyLink to={href}>{children}</GatsbyLink>
  }

  const onPage = href.startsWith('#')

  return (
    <a
      href={href}
      target={onPage ? null : '_blank'}
      rel={onPage ? null : 'noopener noreferrer'}
    >
      {children}
    </a>
  )
}
