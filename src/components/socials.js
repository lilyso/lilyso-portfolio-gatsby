import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Socials = () => {
  console.log(faInstagram)
  return (
    <div className="mx-4">
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        style={{ color: "white" }}
        className="p-4"
      />
      <FontAwesomeIcon
        icon={faFacebook}
        size="2x"
        style={{ color: "white" }}
        className="p-4"
      />
      <FontAwesomeIcon
        icon={faTwitter}
        size="2x"
        style={{ color: "white" }}
        className="p-4"
      />
      <FontAwesomeIcon
        icon={faGithub}
        size="2x"
        style={{ color: "white" }}
        className="p-4"
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        size="2x"
        style={{ color: "white" }}
        className="p-4"
      />
    </div>
  )
}
export default Socials
