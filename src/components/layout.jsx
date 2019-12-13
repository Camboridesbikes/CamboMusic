/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {Link} from "gatsby"
import "./app.css"
import Img from "gatsby-image/withIEPolyfill"
import SocialPanel from './SocialPanel'



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
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0px 1.0875rem 1.45rem`,
        //   paddingTop: 0,
        // }}
      >
        <nav >
        <Link to="/" aria-label="to home page">Home</Link>
        <Link to="/about" aria-label="to about page">About</Link>
        <Link to="/shop" aria-label="to shop page">Shop</Link>
      </nav>
      <div className="main" style={{height: "100vh",}}>
        <div className="splashContainer" >
          {/* <img style={{height: "100vh", objectFit: "cover",objectPosition: "70% 25%", width: "100%"}} src={splashImage} alt=""/>
           */}
           <Img 
            style={{height: "100vh", width: "100%"}} 
            fluid={data.file.childImageSharp.fluid}
            objectFit="cover" objectPosition="70% 25%"
            alt="Cambo singing his heart out in Carlsbad, CA. photo credit: Annel Mathews Photography">
            
            </Img>
          <div className='sMContainer'>
            <SocialPanel/>
          </div>
          <button className="callToAction" aria-label="Connect on Patreon">
            <a href="https://www.patreon.com/Cambomusic">Connect On Patreon</a>
          </button>
        <p className="credit">photo credit Annell Mathews Photography</p>
        </div>
        <div  className="contentContainer">
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
