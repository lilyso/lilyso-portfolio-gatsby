import React, { useState } from "react"
import LazyShow from "./lazyshow"
import validator from "validator"

const Contact = () => {
  const [emailError, setEmailError] = useState("")
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const validateEmail = e => {
    let email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError("Perfecto")
    } else {
      setEmailError("Please enter a valid email")
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <LazyShow>
      <div id="contact" className="lg:m-12 px-4 pt-8 m-8 text-white">
        <h2 className="text-4xl md:text-6xl lg:text-6xl text-center md:text-left lg:text-left py-4">
          Contact
        </h2>
        <p>
          Want to know more about my experience and projects? Get in touch today
          at{" "}
          <a className="hover:underline" href="mailto:lily@lilyso.net">
            lily@lilyso.net
          </a>
        </p>
      </div>
    </LazyShow>
  )
}

export default Contact
