import * as React from "react"
import Nav from "./nav"

const Header = ({ menulinks }) => (
  <header>
    <div className="p-4 bg-black">
      <Nav menulinks={menulinks} />
    </div>
  </header>
)

export default Header
