import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog-listing.css';
import '../styles/layout-overide.css';
import '../styles/tutorials.css';

const Portfolio = () => (
  <div class>
    <h1>Portfolio</h1>
    <ol>
        <li>&#9889;<a href="https://github.com/jayfiled"> Link to my Github</a></li>
        <li>&#128296;<a href="https://drive.google.com/open?id=1c7vKZ2ZyyHOIb_Gvpww1mlgfY2rt8dxn">Service desk Remote tool Windows program ( Screenshots of )</a>&#128295;</li>
        
        <li><a href="https://jaysite.netlify.com/">This site you are on</a></li>
        <li><a href="https://www.freecodecamp.org/">Free Code Camp Course projects</a>
          <ul>
            <li><a href="https://jayfiled.github.io/survey-form/">Survey Form</a></li>
            <li><a href="https://jayfiled.github.io/product-landing-page/">Product landing page</a></li>
            <li><a href="https://codepen.io/jayfiled/full/OZqNOy">Portfolio practice site</a></li>
          </ul>  
        </li>
    </ol>
    
<h3>Contact</h3>

&#128218;<a href="https://docs.google.com/document/d/1_JD97u8OBL-kTGnBJ86fkcRscuMvH_BLIIHUXY1OsZY/edit?usp=sharing">  Resume</a><br /><br />
&#128400;<a href="https://www.linkedin.com/in/joel-james-04555849/">  Linked in profile</a><br /><br />
&#128172;<a href="https://twitter.com/jayfiled">  Twitter</a><br /><br />
&#127752;<a href="https://codepen.io/jayfiled/">  My playground on Codepen</a><br /><br />

 
  </div>
)

export default Portfolio
