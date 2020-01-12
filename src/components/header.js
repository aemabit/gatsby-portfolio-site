import { Link } from "gatsby"
import React, { useState } from "react"
import Hamburger from "./hamburger"

const Header = () => {
  const [status, setStatus] = useState({
    initial: false,
    clicked: null,
    menuName: "+ More",
  })

  const [disabled, setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu()
    if (status.initial === false) {
      setStatus({
        initial: null,
        clicked: true,
        menuName: "x Close",
      })
    } else if (status.clicked === true) {
      setStatus({
        clicked: !status.clicked,
        menuName: "About",
      })
    } else if (status.clicked === false) {
      setStatus({
        clicked: !status.clicked,
        menuName: "Close",
      })
    }
  }

  //

  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 200);
  }

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="thelogo">
              <Link to="/" onClick={() => window.reload()}>
                AEMABIT
              </Link>
            </div>

            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {status.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger status={status} />
    </header>
  )
}

export default Header
