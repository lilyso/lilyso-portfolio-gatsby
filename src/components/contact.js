import React, { useState } from "react"
import LazyShow from "./lazyshow"
// import validator from "validator"

export default function Contact() {
  // const [emailError, setEmailError] = useState("")
  // const validateEmail = e => {
  //   let email = e.target.value

  //   if (validator.isEmail(email)) {
  //     setEmailError("Perfecto")
  //   } else {
  //     setEmailError("Please enter a valid email")
  //   }
  // }
  return (
    <LazyShow>
      <div className="lg:m-12 px-4 py-12 m-8 text-white">
        <h2 className="text-6xl">Contact</h2>
        <p>
          Want to know more about my experience and projects? Get in touch today
          at <a href="mailto:lily@lilyso.net">lily@lilyso.net</a> or send me a
          message below.
        </p>
        <div>
          <form className="w-full lg:w-1/2">
            <div className="py-4 text-white">
              <label className="hidden" htmlFor="first-name">
                First name
              </label>
              <input
                placeholder="Name"
                className="w-full border-solid border-b border-yellow-300 bg-transparent"
                id="first-name"
              />
            </div>
            <div className="py-4 text-white">
              <label className="hidden" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Email"
                className="w-full border-solid border-b border-yellow-300 bg-transparent"
                id="email"
                // onChange={e => validateEmail(e)}
              />
              {/* <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {emailError}
              </span> */}
            </div>
            <div className="py-4 text-white">
              <label className="hidden" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border-solid border-b border-yellow-300 bg-transparent"
                placeholder="Write your message here"
              />
            </div>
            <button
              className="mx-2 my-4 p-2 text-white bg-yellow-300 text-black rounded-lg"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </LazyShow>
  )
}
