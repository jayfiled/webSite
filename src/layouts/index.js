import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import "../styles/layout-overide.css";

import Media from "react-media";


const Sidebar = props => (
  <div
    style={{
      border: "2px solid #e6e6e6",
      borderRadius: "5px",
      maxWidth: 960,
      padding: "1rem",
      marginBottom: "25px"
    }}
  >
    <strong>{props.title}.</strong> {props.description}
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="jayDev"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
        
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>

              <div style={{ flex: .8 }}>
                <Sidebar
                  title="jayDev"
                  description="A landing page for my coding journey. About me, a portfolio and a public space to 'Feynman' things."
                />
                <Sidebar
                  title="About author"
                  description="Joel James is a father of 3, beginning his coding career at 34. Future Full-stack Web Developer specializing in.. possibly Vue? and Node.js based in Melbourne."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;