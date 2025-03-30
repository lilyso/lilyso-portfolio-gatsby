import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Socials from "./socials"

const Footer = ({ menulinks }) => {
  return (
    <footer className="bg-black py-4">
      <div className="pt-8 max-w-4xl text-center m-auto">
        <div>
          <Socials />
          <div className="p-4 flex justify-center flex-wrap">
            {menulinks &&
              menulinks.map(menulink => (
                <AnchorLink
                  to={menulink.link}
                  className="whitespace-nowrap hover:text-yellow-300 text-white p-2"
                >
                  {menulink.name}
                </AnchorLink>
              ))}
            <a
              className="whitespace-nowrap hover:text-yellow-300 text-white p-2"
              href="Lily-Souryaphanh-CV-2025.pdf"
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              RESUME
            </a>
          </div>
        </div>
        <p className="p-4 text-white text-xs ">
          Designed &amp; Built by Lily So 2022
        </p>
      </div>
    </footer>
  )
}
export default Footer
