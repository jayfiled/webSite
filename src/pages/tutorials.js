import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'
import '../styles/tutorials.css'

const Tutorials = () => (
    <div>
    <h1>What's going here?</h1>
        <p>Ideally the tutorial section will have:</p>
<ul>
    <li>A hover menu with categories</li>
    <li><a href="https://codepen.io/jayfiled/full/RJMLeV/">Cards made with react</a> that has the language at the top, title, author (accept public, open source contributions - make tutorial for it) and a blurb of the article.  When you click on it, it takes you to the page with the tutorial</li>
</ul>
<p> But I am struggling to get it up and running for reasons detailed <a href="#">here</a></p>
    
<p>This started as a blog, then turned into a tutorial, so I want to move it from the blog section to this section</p>
<a href="#">Recreating the blue HyperLinks from Wired.com</a>
</div>
)

export default Tutorials

// -- Below is the code for the react cards - I can render to the DOM, but with Gatsby... 
//there doesn't seem to be a DOM...? --- //

//import React from 'react'
//import Link from 'gatsby-link'
//import '../styles/blog-listing.css'
//import '../styles/layout-overide.css'
//import '../styles/tutorials.css'
//
//const App = () => {
//    <div id="app"></div>
//}
//
//function Card(props) {
//
//  return (
//
//    <div className="card-container">
//      <h1>{props.header}</h1>
//      <p>Some cool things I enjoyed learning as a newbie..</p>
//      <div className="code">
//        <p className="class-or-id">{props.classOrId} {'{'} </p>
//        <p className="css-property">{props.cssProperty}:</p> {props.exValue};          
//        <p>{'}'}</p>
//      </div>
//     </div>
//  );
//}
//
//
//let app = (
//  <div>
//    <Card header="CSS Hover" classOrId=".classname:hover" cssProperty="transform" exValue="scale(1.09);"/>
//    <Card header="CSS Animate" classOrId=".classname" cssProperty="animation-name" exValue="name-of-animation"/>
//  </div>
//);
//
//ReactDOM.render(app, document.querySelector('#app'));
//
//export default App;

/*
---
path: "/underlined-links"
date: "2018-06-23T00:01:33.962Z"
title: "Blue underlined links"
---

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