import React from 'react';
import {useStaticQuery, graphql } from 'gatsby';

import Img from "gatsby-image"
export const sharpImage = graphql`
    fragment sharpImage on File {
        childImageSharp{
            fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
            }
        }
    }
`
const SocialPanel = () =>{

    const query = useStaticQuery( graphql`
    query {
        image1: file(relativePath: {eq: "externalIcons/Patreon.png"}) {
            ...sharpImage
        }
        image2: file(relativePath: {eq: "externalIcons/Instagram.png"}) {
            ...sharpImage
        }
        image3: file(relativePath: {eq: "externalIcons/Facebook.png"}) {
            ...sharpImage
        }
      }
      `)

console.log(query);
    return(
        <>
        <a   className='externalIcon' href="https://www.patreon.com/Cambomusic"><Img alt="Patreon Link"  fluid={query.image1.childImageSharp.fluid}></Img></a>
        {/* <a  className='externalIcon' href=""><Img alt=" Link" style={{width: '40px', height: '40px'}} fluid={query.image2.childImageSharp.fluid}></Img></a>
        <a  className='externalIcon' href=""><Img alt=" Link" style={{width: '40px', height: '40px'}} fluid={query.image3.childImageSharp.fluid}></Img></a> */}
        

    </>
    );
   
}

 


export default SocialPanel;