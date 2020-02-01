
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {Link} from "gatsby"
import "./app.css"
import Img from "gatsby-image/withIEPolyfill"
import SocialPanel from './SocialPanel'


//using graphql query to retrieve site cover photo using Gatsby's useStaticQuery component
const Layout = ({ children }) => {
const data = useStaticQuery(graphql`
query MyQuery {
file(relativePath: {eq: "CamboGuitar.jpg"}) {
childImageSharp {
fluid {
aspectRatio
base64

src
srcSet
}
}
}
}

`)

return (
<>
  <div>
    <nav>
      <Link to="/" aria-label="to home page">Home</Link>
      <Link to="/about" aria-label="to about page">About</Link>
      <Link to="/shop" aria-label="to shop page">Shop</Link>
    </nav>

    {/* Container holding the cover/splash content - the content that does not reload upon page change/constent content */}
    <div className="main" style={{height: "100vh",}}>
      <div className="splashContainer">
        {/* site cover photo */}
        <Img style={{height: "100vh", width: "100%"}} fluid={data.file.childImageSharp.fluid} objectFit="cover"
          objectPosition="70% 25%"
          alt="Cambo singing his heart out in Carlsbad, CA. photo credit: Annel Mathews Photography">
        </Img>
        {/* Container holding social media icon links */}
        <div className='sMContainer'>
          <SocialPanel />
        </div>
        {/*Call to Action Button link on cover image to Patrean */}
        <button className="callToAction" aria-label="Connect on Patreon">
          <a href="https://www.patreon.com/Cambomusic">Connect On Patreon</a>
        </button>
        <p className="credit">photo credit Annell Mathews Photography</p>
      </div>

      {/* This container holds the individual pages */}
      <div className="contentContainer">
        <div className="content">
          <main>{children}</main>
        </div>

      </div>

    </div>
  </div>
</>
)
}

Layout.propTypes = {
children: PropTypes.node.isRequired,
}

export default Layout