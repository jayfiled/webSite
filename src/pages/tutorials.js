import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/cards'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'
import '../styles/tutorials.css'

const Tutorials = () => (
    <div>
{/* Trying to put some cards - but the grid and color isn't applying*/}

{/* <div id="card-container">
  <div class="card-top">
    <div class="tut-lang">CSS</div>
    <div class="card-title">HOW TO CHANGE THE DEFAULT HYPERLINK STYLE</div>
    <div class="tut-author">Joel </div>
    <div class="tut-pic"><img src="http://0.gravatar.com/avatar/fd93b9c0bdf8ccd4fa47f03ec2dbe29f?s=108&d=mm&r=g" /></div>
  </div>
  <div class="card-bottom">
    <p> One of the first things I wanted to when I made my first website was change the default style of the hyperlinks. After all, my site was going to reference all the amazing things that I have found that helped me ..</p>
  </div>
</div>
<br /><br /><br /><br /> */}
    
    <h2>Let's start with a tutorial about a different type of Hyperlink </h2>
<a href="/bluehyper">Recreating the blue HyperLinks from Wired.com</a><br /><br />
    <hr />

        <h2>JS fundamentals with explanations </h2>
<a href="https://jayfiled.github.io/JScheat/">All the fundamentals of JS, tied up into a simple accordion. Exercises included</a><br /><br />
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