import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import "./cards.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div style={{ margin: "auto", maxWidth: "1600px" }}>
      <Header menulinks={data.site.siteMetadata?.menuLinks} />
      <div>
        <main className="bg-black">{children}</main>
        <Footer menulinks={data.site.siteMetadata?.menuLinks} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
