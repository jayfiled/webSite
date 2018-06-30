import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/cards'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'
import '../styles/tutorials.css'

const Tutorials = () => (
    <div>
    
    <h2>Let's start with a tutorial about a different type of Hyperlink </h2>
<a href="./bluehyper">Recreating the blue HyperLinks from Wired.com</a><br /><br />
    <hr />
    
    <h1>How will this page look?</h1>
        <p>Ideally, this will be the front page with tiles to click on to take you to tutorials, and: </p>
<ul>
    <li>A hover menu with categories</li>
    <li><a href="https://codepen.io/jayfiled/full/RJMLeV/">Cards made with react</a> that has the language at the top, title, author (accept public, open source contributions - make tutorial for it) and a blurb of the article.  When you click on it, it takes you to the page with the tutorial</li>
</ul>
<p> But I struggled to get it up and running for reasons detailed <a href="/progress">here</a></p>

    
</div>
)

export default Tutorials