import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog-listing.css'
import '../styles/layout-overide.css'
import '../styles/tutorials.css'

const Card = (props) => {

  return (

    <div className="card-container">
      <h1>{props.header}</h1>
      <p>{props.blurb}</p>
      <div className="code">
        <p className="class-or-id">{props.classOrId} {'{'} </p>
        <span className="css-property">{props.cssProperty} </span>{props.exValue}<br />
        <span className="css-property">{props.cssProperty1} </span>{props.exValue1}
        <p className="css-property">{props.cssProperty2}</p> {props.exValue2} 
        <p className="css-property">{props.cssProperty3}</p> {props.exValue3} 
        <p className="css-property">{props.cssProperty4}</p> {props.exValue4} 
        <p className="css-property">{props.cssProperty5}</p> {props.exValue5} 
        <p className="css-property">{props.cssProperty6}</p> {props.exValue6}
        <p className="css-property">{props.cssProperty7}</p> {props.exValue7}
        <p>{'}'}</p>
      </div>
     </div>
  );
}

export default Card
