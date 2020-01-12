import React, { useEffect, useRef } from "react"
import gsap from "gsap"

// MEDIA
import mars from "../images/mars.png"
import aemabit from "../images/aemabit.png"
import greenlink from "../images/thegreenlink.png"
import starwars from "../images/starwars.jpg"
import goldtree from "../images/goldtree.png"
import me from "../images/MejiaAndres.jpg"

const projects = [
  { name: "mars", image: mars, link: "https://mars.aemabit.com/" },
  { name: "aemabit", image: aemabit, link: "https://aemabit.com/" },
  {
    name: "greenlink",
    image: greenlink,
    link: "https://thegreenlink.herokuapp.com/",
  },
  {
    name: "starwars",
    image: starwars,
    link: "https://github.com/aemabit/Swapi-project",
  },
  {
    name: "goldtree",
    image: goldtree,
    link: "https://github.com/aemabit/MERN-Stack-Next.js",
  },
]

const Hamburger = ({ status }) => {
  // DOM NODES
  let menu = useRef(null)
  let revealMenu = useRef(null)
  let revealMenuBackground = useRef(null)
  let projectBackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let info = useRef(null)

  useEffect(() => {
    if (status.clicked === false) {
      // CLOSE
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      })
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      })
    } else if (
      status.clicked === true ||
      (status.clicked === true && status.initial === null)
    ) {
      // OPEN
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      })
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      })
      staggerReaveal(revealMenuBackground, revealMenu)
      fadeInUp(info)
      staggerText(line1, line2, line3)
    }
  }, [status])

  const staggerReaveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    })
  }

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    })
  }

  const fadeInUp = node => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.4,
      opacity: 0,
      ease: "power3.inOut",
    })
  }

  const handleProject = project => {
    gsap.to(projectBackground, {
      duration: 0,
      background: `url(${project}) center center`,
    })
    gsap.to(projectBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    })
    gsap.from(projectBackground, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    })
  }

  const handleProjectReturn = () => {
    gsap.to(projectBackground, {
      duration: 0.4,
      opacity: 0,
    })
  }

  const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    })
  }
  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    })
  }

  return (
    <div ref={el => (menu = el)} className="hamburger-menu">
      <div
        ref={el => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div
          ref={el => (projectBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li ref={el => (line1 = el)}>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseLeave={e => handleHoverExit(e)}
                      href="https://github.com/aemabit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li ref={el => (line2 = el)}>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseLeave={e => handleHoverExit(e)}
                      href="https://www.linkedin.com/in/andres-mejias/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li ref={el => (line3 = el)}>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseLeave={e => handleHoverExit(e)}
                      href="https://www.instagram.com/aemabit/?hl=es"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className="info">
                <img src={me} alt=""></img>
              </div>
              <div className="locations">
                Projects:
                {projects.map(el => (
                  <span key={el.name}>
                    <a
                      onMouseEnter={() => handleProject(el.image)}
                      onMouseLeave={handleProjectReturn}
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {el.name}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
