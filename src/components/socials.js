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
  const socialIcons = [
    { icon: faGithub, link: "https://github.com/lilyso" },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/lily-souryaphanh-04b16a3b/",
    },
  ]
  return (
    <div className="mx-4">
      {socialIcons &&
        socialIcons.map(socialIcon => (
          <a href={socialIcon.link} target="_blank">
            <FontAwesomeIcon
              icon={socialIcon.icon}
              size="2x"
              style={{ color: "white" }}
              className="hover:scale-150 hover:transition hover:duration-500 hover:ease-in-out p-4"
            />
          </a>
        ))}
    </div>
  )
}
export default Socials
