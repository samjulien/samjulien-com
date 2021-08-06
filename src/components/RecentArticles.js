import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const RecentArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 10
        filter: {
          frontmatter: { published: { ne: false } }
          fileAbsolutePath: { regex: "//content/writing//" }
        }
      ) {
        edges {
          node {
            id
            fields {
              title
              slug
              date(formatString: "MMMM Do, YYYY")
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
          {edge.node.fields.date} -{' '}
          <Link to={`/${edge.node.fields.slug}`}>{edge.node.fields.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default RecentArticles
