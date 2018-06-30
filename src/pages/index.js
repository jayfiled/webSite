import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'

const HomePage = () => (
  <div>
    <a className="land-links" href="/blog">Blog</a><br />
    <a className="land-links" href="/portfolio">Portfolio </a><sup class="soon">(Coming soon)</sup> <br />
    <a className="land-links" href="/tutorials">Tutorials </a><sup class="soon">(New!)</sup> <br />
  </div>
)

export default HomePage