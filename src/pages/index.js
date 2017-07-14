import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
import ArticleItem from '../components/ArticleItem';
import ArticleGrid from '../components/ArticleGrid';

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
    posts.forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path
        pageLinks.push(
          <li
            key={post.node.frontmatter.path}
          >
            <ArticleItem
              title={post.node.frontmatter.title}
              kicker={post.node.frontmatter.kicker}
              link={post.node.frontmatter.path}
              image={get(post, "node.frontmatter.image.childImageSharp.resize.src") || null}
            />
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <ArticleGrid>
          {pageLinks}
        </ArticleGrid>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
            image {
              childImageSharp {
                resize(width: 300, height: 170) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
