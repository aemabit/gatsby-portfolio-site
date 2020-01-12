import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "code-snippet.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "codetwo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section id="about">
      <div className="about-blurb">
        <div className="container">
          <div className="inner-blurb">
            <div className="content">
              <h3>The ability to create</h3>
              <p>
                Hi, my name is Andres Mejias, I am passionate about the subject
                of the technology industry, and that's why I decided to start
                programming and get my full stack web developer certificate at
                Wyncode Academy.
              </p>
              <p>
                Since then I keep the slogan of the institution that introduced
                me to this industry that says "NEVER STOP LEARNING".
              </p>

              <p>
                Now I manage a variety of tools and frameworks where my
                favorites are:
              </p>
              <p>
                ReactJS, NextJS, SaSS / SCSS, VanillaJS + ES6, NodeJS, Express,
                MongoDB.
              </p>

              <div className="btn-row">
                {/* <span onClick={handleMenu}>View Projects</span> */}
              </div>
            </div>
            <div className="images">
              <div className="top-right">
                <Img fluid={data.fist.childImageSharp.fluid} />
              </div>
              <div className="bottom-left">
                <Img fluid={data.flower.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
        <div className="black-box"></div>
        <div className="black-box overlay"></div>
      </div>
    </section>
  )
}

export default AboutBlurb
