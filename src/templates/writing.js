import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from 'components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Fuse from 'fuse.js'
import { isEmpty, get } from 'lodash'

const Blog = ({ data: { allMdx } }) => {
  const posts = allMdx.edges

  // Search
  const fuseOptions = {
    keys: [
      { name: 'node.frontmatter.title', weight: 0.8 },
      { name: 'node.excerpt', weight: 0.5 },
    ],
    useExtendedSearch: true,
  }
  const fuse = new Fuse(posts, fuseOptions)

  const [searchValue, setSearchValue] = React.useState('')
  const searchOn = searchValue.length > 0
  const result = fuse.search(searchValue)

  return (
    <Layout>
      <SEO />
      <Container>
        <form className="mb-4 sm:mt-6 mt-0">
          <label htmlFor="search" className="sr-only">
            Search articles
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              autoComplete="off"
              aria-labelledby="search"
              type="search"
              id="search"
              onChange={(e) => {
                e.preventDefault()
                setSearchValue(e.target.value)
              }}
              className="form-input pl-8 block w-full sm:text-base sm:leading-5 focus:shadow-outline-green"
              placeholder="Search articles"
              value={searchValue}
            />
            {/* prettier-ignore */}
            <svg className="absolute top-2 mt-px ml-2 text-gray-400" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" className="nc-icon-wrapper"><path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z" fill="currentColor"/></g></svg>
          </div>
        </form>
        <ul>
          {searchOn &&
            !isEmpty(result) &&
            result.map(({ item: { node } }, i) => (
              <li key={node.id}>
                <Link
                  to={`/${node.fields.slug}`}
                  className="py-8 flex items-start text-gray-900 hover:text-green-600"
                >
                  {node.frontmatter.banner && (
                    <div className="w-full mr-8 overflow-hidden rounded-md">
                      <Img
                        sizes={node.frontmatter.banner.childImageSharp.fluid}
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="sm:text-3xl text-2xl leading-tight mb-2">
                      {node.frontmatter.title}
                    </h2>
                    <div className="text-sm text-gray-600">
                      First Published: {node.frontmatter.date}
                    </div>
                    <p className="text-gray-800 my-4">{node.excerpt}</p>
                    <div>Read More →</div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        {!searchOn &&
          posts.map(({ node: post }) => (
            <article key={post.id}>
              <Link
                to={`/${post.fields.slug}`}
                className="py-8 flex items-start text-gray-900 hover:text-green-600"
              >
                {post.frontmatter.banner && (
                  <div className="w-full mr-8 overflow-hidden rounded-md">
                    <Img
                      sizes={post.frontmatter.banner.childImageSharp.fluid}
                    />
                  </div>
                )}
                <div>
                  <h2 className="sm:text-3xl text-2xl leading-tight mb-2">
                    {post.frontmatter.title}
                  </h2>
                  <div className="text-sm text-gray-600">
                    First Published: {post.frontmatter.date}
                  </div>
                  <p className="text-gray-800 my-4">{post.excerpt}</p>
                  <div>Read More →</div>
                </div>
              </Link>
            </article>
          ))}
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fileAbsolutePath: { regex: "//content/writing//" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            tags
          }
        }
      }
    }
  }
`
