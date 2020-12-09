import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="topNav">
      <a className="topLinks" target= "_blank" href="https://github.com/oicochea"> Github</a>
      <a className="topLinks" target= "_blank"href="https://www.linkedin.com/in/oscaricocheacalenzani/"> Linkedin</a>
      <a className="topLinks"  href="#projectsContainer">Projects</a>
      <a className="topLinks"target= "_blank"href="https://docs.google.com/document/d/e/2PACX-1vQ8V0YglEIJD2cpvuDU3zPeFE-O2UnALJFHtFKbFrIR4VFWuqr5Xww9Lf7MHDO60yiSBaWEzPzkAwWc/pub">Resume</a>
      <a className="topLinks"target= "_blank"href="https://docs.google.com/document/d/e/2PACX-1vQ8V0YglEIJD2cpvuDU3zPeFE-O2UnALJFHtFKbFrIR4VFWuqr5Xww9Lf7MHDO60yiSBaWEzPzkAwWc/pub">Contact Me</a>
    </nav>
    
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Oscar Icochea Calenzani Portfolio`,
}

export default Header
