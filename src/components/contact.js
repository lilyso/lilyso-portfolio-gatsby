import React from "react"
import LazyShow from "./lazyshow"

const Contact = () => {
  return (
    <LazyShow>
      <div id="contact" className="lg:m-12 px-4 pt-8 m-8 text-white">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-center md:text-left lg:text-left py-4">
          Contact
        </h2>
        <p>
          Want to know more about my experience and projects? Get in touch today
          at{" "}
          <a className="hover:underline" href="mailto:lilysodev@gmail.com">
            lilysodev@gmail.com
          </a>
        </p>
      </div>
    </LazyShow>
  )
}

export default Contact
