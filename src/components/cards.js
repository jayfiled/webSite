import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'
import '../styles/tutorials.css'

const Card = (props) => {

  return (

    <div className="card-container">
      <h1>{props.header}</h1>
      <p>Some cool things I enjoyed learning as a newbie..</p>
      <div className="code">
        <p className="class-or-id">{props.classOrId} {'{'} </p>
        <p className="css-property">{props.cssProperty}:</p> {props.exValue};          
        <p>{'}'}</p>
      </div>
     </div>
  );
}

export default Card
