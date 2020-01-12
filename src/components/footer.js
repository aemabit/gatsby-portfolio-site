import React from "react"

//Featured Companies
import bsdev from "../images/biscaynedevs-04.png"
import nextjs from "../images/next-01.png"
import mongodb from "../images/MongoDB-03.png"
import sass from "../images/sass-02.png"

// Socials
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.svg"

const featured = [
  { name: "nextjs", image: nextjs },
  { name: "bsdev", image: bsdev },
  { name: "sass", image: sass },
  { name: "mongodb", image: mongodb },
]

const Footer = () => {
  return (
    <footer id="footer">
      <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image }) => (
              <li key={name}>
                <img src={image} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="inner">
          <span>© 2020 Andres Mejias</span>
          <div className="socials">
            <a href="https://www.linkedin.com/in/andres-mejias/">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/aemabit/?hl=es">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <span>aemabit@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
