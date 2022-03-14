import React from "react"
import LazyShow from "./lazyshow"

const TechnicalSkills = () => {
  const skills = [
    "Gatsby",
    "MongoDB",
    "Express",
    "React",
    "Node",
    "HTML",
    "CSS",
    "Javascript",
    "JQuery",
    "MySQL",
    "GraphQL",
  ]
  return (
    <LazyShow>
      <div className="mx-8 py-8 flex-wrap flex text-white justify-evenly">
        {skills &&
          skills.map(skill => (
            <p className="px-2 hover:text-yellow-300 hover:rotate-12 hover:transition hover:duration-500 hover:ease-in-out">
              {skill}
            </p>
          ))}
      </div>
    </LazyShow>
  )
}

export default TechnicalSkills
