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
    // querying images for social media icons from ../src/images
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

      //creating a link for each of the icons
console.log(query);
    return(
        <>
        <a   className='externalIcon' href="https://www.patreon.com/Cambomusic" aria-label="link to patreon page"><Img alt="Patreon Link"  fluid={query.image1.childImageSharp.fluid}></Img></a>
        <a  className='externalIcon' href="https://www.instagram.com/felixcambo" aria-label="link to Instagram"><Img alt="Instagram Link"  fluid={query.image2.childImageSharp.fluid}></Img></a>
        <a  className='externalIcon' href="https://www.facebook.com/FelixCamboMusic" aria-label="link to Facebook page"><Img alt="Facebook Link"  fluid={query.image3.childImageSharp.fluid}></Img></a>
        <a  className='externalIcon' href="https://twitter.com/FelixCambo" aria-label="link to twitter"><Img alt="Twitter Link"  fluid={query.image4.childImageSharp.fluid}></Img></a>
        

    </>
    );
   
}

 


export default SocialPanel;