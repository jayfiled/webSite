import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/cards'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'
import '../styles/tutorials.css'
import Accordion from 'react-collapsy';
import '../../node_modules/react-collapsy/lib/index.css';
import "../../node_modules/prismjs/themes/prism-tomorrow.css";

const JsBasics = () => (

<Accordion>
    {/* Find out how to put the header in the accordion */}
<div>JS Basics</div> <br />
<div><code class="language-js">This page will be my cheatsheat for JS</code></div><br />
<div>One Accordion for every section:
    <ul>
        <li>Basics</li>
        <li>Operators</li>
        <li>Control Flow</li>
        <li>Objects</li>
        <li>Arrays</li>
        <li>Functions</li>
    </ul>
It's 2275 lines long and I still have 1 section to go. <a href="https://github.com/jayfiled/JSBasics">
Github repo</a>
</div>
</Accordion>

)

export default JsBasics