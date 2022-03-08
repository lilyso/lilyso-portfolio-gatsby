import * as React from "react"
import { Link } from "gatsby"
import Socials from "./socials"

const Footer = () => {
  const footerLinks = ["Home", "Experience", "Work", "Contact"]
  return (
    <footer className="bg-black py-4">
      <div className="pt-8 max-w-4xl text-center m-auto">
        <div>
          <Socials />
          <div className="p-4">
            {footerLinks &&
              footerLinks.map(link => (
                <Link
                  to="/"
                  className="whitespace-nowrap hover:text-yellow-300 text-white p-2"
                >
                  {link}
                </Link>
              ))}
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
