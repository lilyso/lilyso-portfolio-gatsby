import * as React from "react"
import { Link } from "gatsby"
import Socials from "./socials"

const Footer = () => (
  <footer className="bg-black py-4">
    <div className="pt-8 max-w-4xl text-center m-auto">
      <div>
        <Socials />
        <Link to="/" className="text-white p-4">
          Home
        </Link>
        <Link to="/experience" className="whitespace-pre text-white p-4">
          Experience
        </Link>
        <Link to="/work" className="whitespace-pre text-white p-4">
          Work
        </Link>
        <Link to="/" className="whitespace-pre text-white p-4">
          Testimonials
        </Link>
        <Link to="/contact" className="whitespace-pre text-white p-4">
          Contact
        </Link>
        <Link to="/faq" className="whitespace-pre text-white p-4">
          FAQ
        </Link>
      </div>
      <p className="p-4 text-white">Designed &amp; Built by Lily So 2022</p>
    </div>
  </footer>
)

export default Footer
