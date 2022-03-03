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
    "MySQL",
    "GraphQL",
  ]
  return (
    <LazyShow>
      <div className="flex-wrap flex p-4 text-white justify-evenly">
        {skills &&
          skills.map(skill => (
            <p className="px-2 hover:text-yellow-300 hover:scale-150 hover:transition hover:duration-500 hover:ease-in-out">
              {skill}
            </p>
          ))}
      </div>
    </LazyShow>
  )
}

export default TechnicalSkills
