import React from "react"

import SEO from "../components/seo"
import Video from "../components/video"

import "./index.css"




const IndexPage = () => (
  
  <>
    <SEO title="Home" />
    <div className="index" >
    <h1>Good</h1>
    <h1>Morning</h1>
    <h2>I'm Producing <br/>My First Album!!!</h2>
    <Video/>
  </div>
  </>
)



export default IndexPage
