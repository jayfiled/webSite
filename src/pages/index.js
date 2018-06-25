import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'

const HomePage = () => (
  <div>
    <a className="land-links" href="/blog">Blog</a><br />
    <a className="land-links" href="/portfolio">Portfolio</a> <br />
    <a className="land-links" href="/tutorials">Tutorials</a> <br />
  </div>
)

export default HomePage