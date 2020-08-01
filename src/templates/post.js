import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from 'components/SEO'
import Container from 'components/Container'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Share from '../components/Share'

export default function Post({ data: { site, mdx, next, prev } }) {
  const { date, title, banner, date_updated, ogimage } = mdx.frontmatter
  const keywords = site.siteMetadata.keywords
  const showDateUpdated = date_updated && date_updated > date
  const ogImagePath = ogimage && ogimage.childImageSharp.fixed.src

  return (
    <Layout frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost postImage={ogImagePath} />
      <Container className="max-w-screen-md mx-auto px-5">
        <h1 className="md:text-6xl text-5xl leading-none my-10 text-center lg:-mx-24 mx-0">
          {title}
        </h1>
        {banner && (
          <div className="overflow-hidden sm:rounded-lg rounded-none my-8 -mx-5">
            <Img
              sizes={banner.childImageSharp.fluid}
              alt={keywords.join(', ')}
            />
          </div>
        )}
        {date || showDateUpdated ? (
          <div className="text-center text-sm text-gray-600 mb-10">
            {date && <div>First Published: {date}</div>}
            {showDateUpdated && <div>Last Updated: {date_updated}</div>}
          </div>
        ) : null}
        <article className="prose lg:prose-xl max-w-none">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
      </Container>
      <Container className="max-w-screen-lg mx-auto px-5">
        <div className="mt-16 text-lg grid sm:grid-cols-5 grid-cols-1 sm:gap-8 gap-5">
          {prev && (
            <Link
              className={`${
                next ? 'sm:col-span-2 col-span-3' : 'col-span-5'
              } p-8 rounded-md border border-cool-gray-200 hover:bg-cool-gray-50 flex flex-col text-gray-600 hover:text-green-600`}
              to={prev.frontmatter.slug}
            >
              <span className="uppercase mb-4 text-base font-bold">
                ← Previous Article
              </span>
              {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              className={`${
                prev ? 'col-span-3' : 'col-span-5'
              } p-8 rounded-md border border-cool-gray-200 hover:bg-cool-gray-50 flex flex-col text-gray-600 hover:text-green-600`}
              to={next.frontmatter.slug}
            >
              <span className="uppercase mb-4 text-base font-bold">
                Next Article →
              </span>
              {next.frontmatter.title}
            </Link>
          )}
        </div>
        {/* <Link
          to="/writing"
          aria-label="Visit bwriting"
          className="inline-block mt-8 px-3 py-2 bg-green-50 hover:bg-green-100 text-green-800 rounded-md"
        >
          ← Back to writing
        </Link> */}
      </Container>
      {/* <Container>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
      </Container> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        keywords
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM Do, YYYY")
        date_updated(formatString: "MMMM Do, YYYY")
        author
        ogimage {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        tags
      }
      body
    }
    prev: mdx(fields: { id: { eq: $previousId } }) {
      frontmatter {
        title
        slug
      }
    }
    next: mdx(fields: { id: { eq: $nextId } }) {
      frontmatter {
        title
        slug
      }
    }
  }
`
