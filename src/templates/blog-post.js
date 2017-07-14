import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"

import Article from '../components/Article';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Article
          title={post.frontmatter.title}
          datePublished={post.frontmatter.date}
          bodyMarkup={post.html}
          kicker={post.frontmatter.kicker}
        />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        kicker
        author
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
          }
        }
      }
    }
  }
`
