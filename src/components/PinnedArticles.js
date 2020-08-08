import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const PinnedArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 20
        filter: {
          frontmatter: { published: { ne: false }, pinned: { eq: true } }
          fileAbsolutePath: { regex: "//content/writing//" }
        }
      ) {
        edges {
          node {
            id
            fields {
              title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ul>
      {data.allMdx.edges.map((edge) => (
        <li key={edge.node.id}>
          <Link to={`/${edge.node.fields.slug}`}>{edge.node.fields.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default PinnedArticles
