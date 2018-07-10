import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/cards'
import Img from 'gatsby-image'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'
import '../styles/tutorials.css'

export default ({ data }) => (
  <div>
        <p>It took me forever to figure out how to put this picture here with graphQL!... in react. In the end it was just a hack job :-/ </p>
    <Img resolutions={data.file.childImageSharp.resolutions} />
        <p>I'll come back for the tutorials after I get more <a href="/JSBasics">comfortable with Javascript basics</a></p>
  </div>
);

export const ImageQuery = graphql`
  query ImageQuery {
    file(relativePath: { eq: "tutorials/resources/blue-underlined-css.png" }) {
      childImageSharp {
        resolutions(width: 600, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;

/*

export default ({ data }) => (
  <div>
    <Card header="Blue Hyperlinks" blurb="Using a picture to underline links" classOrId=".a" cssProperty="background-image:" cssProperty1="background-size:" exValue="url(http://cdn.mobify.com/sites/wired/production/i/link-bg.png);" exValue1="5px 24px;"/>
    
    <p>Should produce something like this</p>
    <h1>Hello gatsby-image</h1>
    <Img sizes={data.file.childImageSharp.resolutions} />
  </div>
);

export const query = graphql`
  query indexQuery {
    fileName: file(relativePath: { eq: "tutorials/resources/blue-underlined-css.png" }) {
      childImageSharp {
        sizes(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;


const StringEx = () => (
  <div>
    <Card header="Blue Hyperlinks" blurb="Using a picture to underline links" classOrId=".a" cssProperty="background-image:" cssProperty1="background-size:" exValue="url(http://cdn.mobify.com/sites/wired/production/i/link-bg.png);" exValue1="5px 24px;"/>
    
    <p>Should produce something like this</p>
    
  </div>
)

export default StringEx







###Wired.com's hyperlinks - 2 styles ###

It'll look like this:

<img class="blog-img" src="https://drive.google.com/uc?id=1_u22MQMHLfOBeuHynIpeGnvtt-iV8FNg">

Or this:
<img class="blog-img" src="https://drive.google.com/uc?id=1Hj9ZoYkyOGs_skP5KMbuPBXKk5GyshfS">


1. Simply reference a .png

    `a {
    background-image: url(http://cdn.mobify.com/sites/wired/production/i/link-bg.png);<br />
    background-size: 5px 24px;
    }`
    
Overlays a blue .png file over the top and bottom of the text, and the background size is increased to make it look like one single highlight

---

2. ..or remote text-decoration and assign the *inset* value on the *box-shadow* property. 

    `a {
    text-decoration: none;
    color: #000;
    box-shadow: inset 0 -4px 0 #c0e6f7;
    text-decoration: none;
    }`

I should explain the inset value in the box-shadow property.. 

    */