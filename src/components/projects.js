import React from "react"
import LazyShow from "./lazyshow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import projectCards from "../content/projectData"
const Projects = () => {
  const [showMore, setShowMore] = React.useState(false)
  return (
    <div id="projects" className="pt-4">
      <div className="md:m-8 lg:m-12 border-solid border-l border-yellow-300">
        <LazyShow>
          <h2 className="p-4 mx-4 text-6xl text-center lg:text-left md:text-left text-yellow-300">
            Projects
          </h2>
        </LazyShow>
        <LazyShow>
          {showMore ? (
            <div className="m-4 flex flex-wrap gap-2">
              {projectCards &&
                projectCards.map(projectCard => (
                  <div className="flex-grow boxshadow p-4 m-2 rounded-xl border-solid border border-yellow-300 text-white w-full md:w-1/3 lg:w-1/4">
                    <img
                      src={projectCard.src}
                      alt={projectCard.alt}
                      className="rounded-lg"
                    />
                    <h4 className="">{projectCard.name}</h4>
                    <p className="text-sm">{projectCard.desc}</p>
                    <p className="italic text-xs">{projectCard.role}</p>
                    <div className="text-sm py-2">
                      <a href={projectCard.link} target="_blank">
                        Go to project{" "}
                        <FontAwesomeIcon
                          icon={faSquareArrowUpRight}
                          style={{ color: "white" }}
                          className="hover:scale-125 hover:transition hover:duration-500 hover:ease-in-out"
                        />
                      </a>
                    </div>
                    {projectCard.github ? (
                      <div className="text-sm py-2">
                        <a href={projectCard.github} target="_blank">
                          Github{" "}
                          <FontAwesomeIcon
                            icon={faSquareArrowUpRight}
                            style={{ color: "white" }}
                            className="hover:scale-125 hover:transition hover:duration-500 hover:ease-in-out"
                          />
                        </a>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <div className="m-4 flex flex-wrap gap-2">
              {projectCards &&
                projectCards.slice(0, 6).map(projectCard => (
                  <div className="flex-grow boxshadow p-4 m-2 rounded-xl border-solid border border-yellow-300 text-white w-full md:w-1/3 lg:w-1/4">
                    <img
                      src={projectCard.src}
                      alt={projectCard.alt}
                      className="rounded-lg"
                    />
                    <h4 className="">{projectCard.name}</h4>
                    <p className="text-sm">{projectCard.desc}</p>
                    <p className="italic text-xs">{projectCard.role}</p>
                    <div className="text-sm py-2">
                      <a href={projectCard.link} target="_blank">
                        Go to project{" "}
                        <FontAwesomeIcon
                          icon={faSquareArrowUpRight}
                          style={{ color: "white" }}
                          className="hover:scale-125 hover:transition hover:duration-500 hover:ease-in-out"
                        />
                      </a>
                    </div>
                    {projectCard.github ? (
                      <div className="text-sm py-2">
                        <a href={projectCard.github} target="_blank">
                          Github{" "}
                          <FontAwesomeIcon
                            icon={faSquareArrowUpRight}
                            style={{ color: "white" }}
                            className="hover:scale-125 hover:transition hover:duration-500 hover:ease-in-out"
                          />
                        </a>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
            </div>
          )}
          <div className="text-center">
            <button
              className="boxshadow hover:scale-110 hover:duration-500 border-solid border border-yellow-300 rounded-lg p-2 my-8 text-white text-xs"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "SHOW LESS" : "SHOW MORE"}
            </button>
          </div>
        </LazyShow>
      </div>
    </div>
  )
}

export default Projects
