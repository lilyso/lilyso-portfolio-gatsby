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
  const socialIcons = [faInstagram, faFacebook, faGithub, faLinkedin]
  return (
    <div className="mx-4">
      {socialIcons &&
        socialIcons.map(socialIcon => (
          <FontAwesomeIcon
            icon={socialIcon}
            size="2x"
            style={{ color: "white" }}
            className="hover:scale-150 hover:transition hover:duration-500 hover:ease-in-out p-4"
          />
        ))}
    </div>
  )
}
export default Socials
