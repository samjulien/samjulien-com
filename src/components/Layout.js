import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import mdxComponents from './mdx'
import Header from './Header'
import config from '../../config/website'
import Footer from '../components/Footer'
import 'focus-visible'
import '../css/index.css'

function Layout({
  data,
  frontmatter = {},
  children,
  dark,
  headerBg,
  headerColor,
  noFooter,
  noSubscribeForm,
}) {
  const site = data.site

  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = data.site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <Fragment>
      <Helmet
        title={config.siteTitle}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      <Header
        siteTitle={site.siteMetadata.siteTitleShort}
        dark={dark}
        bgColor={headerBg}
        headerColor={headerColor}
      />
      <MDXProvider components={mdxComponents}>
        <Fragment>{children}</Fragment>
      </MDXProvider>
      {!noFooter && (
        <Footer
          author={site.siteMetadata.author.name}
          noSubscribeForm={noSubscribeForm}
        />
      )}
    </Fragment>
  )
}

export default function LayoutWithSiteData(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              siteTitleShort
              description
              author {
                name
              }
              keywords
            }
          }
        }
      `}
      render={(data) => <Layout data={data} {...props} />}
    />
  )
}
