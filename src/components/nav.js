import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SlideDown } from "./slide"

const Nav = ({ menulinks }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const [screenWidth, setScreenWidth] = React.useState(0)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  React.useEffect(() => {
    const sw = window.innerWidth
    setScreenWidth(window.innerWidth)

    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", changeWidth)
  }, [])

  return (
    <nav className="lg:p-0 md:p-0 p-8 flex items-center flex-wrap justify-between">
      <div className="px-8">
        <StaticImage
          src="../images/LS-Logo-1000wh.png"
          alt="lily so logo"
          className="w-12"
        />{" "}
      </div>

      <div className="block lg:hidden">
        <button
          onClick={toggleNav}
          className="flex mx-8 px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {(toggleMenu || screenWidth > 1025) && (
        <div className="flex justify-end w-full md:w-1/2 lg:w-1/2">
          <SlideDown>
            <div className="z-40 p-4 block lg:flex">
              {menulinks &&
                menulinks.map(menulink => (
                  <div key={menulink.name} className="justify-end flex">
                    <Link
                      to={menulink.link}
                      className="mx-4 py-2 text-lg block lg:inline-block lg:mt-0 text-white border-solid border-black border-b-2 hover:border-yellow-300"
                    >
                      {menulink.name}
                    </Link>
                  </div>
                ))}
            </div>
          </SlideDown>
        </div>
      )}
    </nav>
  )
}
export default Nav
