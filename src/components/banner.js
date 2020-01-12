import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// GSAP
import { TweenMax, Power3 } from "gsap"

const Banner = () => {
  let mainPhoto = useRef(null)
  let leftPhoto = useRef(null)
  let rightPhoto = useRef(null)

  useEffect(() => {
    // gsap.from([mainPhoto, leftPhoto, rightPhoto], {
    //   duration: 0.8,
    //   y: 1000,
    //   delay: 0.2,
    //   ease: "power3.inOut",
    //   stagger: {
    //     amount: 0.3,
    //   },
    // })
    TweenMax.to(mainPhoto, 1, {
      opacity: 1,
      ease: Power3.easeIn,
    })
    TweenMax.to(leftPhoto, 0.8, {
      opacity: 1,
      ease: Power3.easeIn,
    })
    TweenMax.to(rightPhoto, 0.8, {
      opacity: 1,
      ease: Power3.easeIn,
    })
  }, [])

  const data = useStaticQuery(graphql`
    query {
      poppinShades: file(relativePath: { eq: "poppin-shades.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diamonds: file(relativePath: { eq: "diamonds.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sexyOrange: file(relativePath: { eq: "sexy-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div
            ref={el => {
              leftPhoto = el
            }}
            className="side-image left"
          >
            <Img fluid={data.diamonds.childImageSharp.fluid} />
          </div>
          <div className="main-text">Andres Mejias</div>
          <div
            ref={el => {
              mainPhoto = el
            }}
            className="main-image"
          >
            <Img fluid={data.poppinShades.childImageSharp.fluid} />
          </div>
          <div
            ref={el => {
              rightPhoto = el
            }}
            className="side-image right"
          >
            <Img fluid={data.sexyOrange.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className="fixed-misc">Researcher | Designer | Developer</div>
    </div>
  )
}

export default Banner
