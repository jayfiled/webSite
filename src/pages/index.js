import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'

const HomePage = () => (
  <div>
    <a href="/blog"><h1>Go to the blog section</h1></a><br />
    <a href="/portfolio"><h1>Go to my portfolio</h1></a> <br />
    <a href="/tutorials"><h1>Go to the tutorial section</h1></a> <br />
  </div>
)

export default HomePage