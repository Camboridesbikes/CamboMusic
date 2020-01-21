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
        image4: file(relativePath: {eq: "externalIcons/Twitter.png"}) {
            ...sharpImage
        }
      }
      `)

console.log(query);
    return(
        <>
        <a   className='externalIcon' href="https://www.patreon.com/Cambomusic" aria-label="link to patreon page"><Img alt="Patreon Link"  fluid={query.image1.childImageSharp.fluid}></Img></a>
        <a  className='externalIcon' href="https://www.instagram.com/felixcambo" aria-label=""><Img alt="Instagram Link"  fluid={query.image2.childImageSharp.fluid}></Img></a>
        <a  className='externalIcon' href="https://www.facebook.com/FelixCamboMusic" aria-label=""><Img alt="Facebook Link"  fluid={query.image3.childImageSharp.fluid}></Img></a>
        <a  className='externalIcon' href="https://twitter.com/FelixCambo" aria-label=""><Img alt="Twitter Link"  fluid={query.image4.childImageSharp.fluid}></Img></a>
        

    </>
    );
   
}

 


export default SocialPanel;