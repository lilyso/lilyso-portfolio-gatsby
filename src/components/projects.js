import React from "react"
import LazyShow from "./lazyshow"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
  const projectCards = [
    {
      name: "myradio.click",
      github: "",
      link: "https://console.myradio.click/",
      src: "/console.myradio.click.png",
      alt: "myradio.click homapage",
      desc: "Radio Station Manager where stations can manage and keep track of programs.",
      role: "Front-End: UX, UI, Design",
    },
    {
      name: "Swapzie",
      github: "https://github.com/lilyso/swapzie",
      link: "https://swapzie.herokuapp.com/",
      src: "/swapzie_home_page.png",
      alt: "swapzie homepage",
      desc: "A swapping platform for pre-loved toys where parents can find or donate free toys",
      role: "Sole Author",
    },
    {
      name: "Beauty Board",
      github: "https://github.com/lilyso/my-beauty-board",
      link: "https://mighty-reef-26126.herokuapp.com/",
      src: "/BeautyBoardHome.png",
      alt: "beauty board homepage",
      desc: "A pinterest style platform where users can keep track of beauty products they use and share their experience with other users.",
      role: "Front-End: UX, UI, Back-End: API",
    },
    {
      name: "The Techy Blog",
      github: "https://github.com/lilyso/the-techy-blog",
      link: "https://ancient-headland-48213.herokuapp.com/",
      src: "/TheTechyBlog.png",
      alt: "tech blog homepage",
      desc: "A CMS-style blog site where developers can publish their blog posts.",
      role: "Sole Author",
    },
    {
      name: "My Weather Dashboard",
      github: "https://github.com/lilyso/weather-dashboard",
      link: "https://lilyso.github.io/weather-dashboard/",
      src: "/my-weather-dashboard.png",
      alt: "weather dashboard homepage",
      desc: "A weather dashboard to track the forecast for multiple cities.",
      role: "Sole Author",
    },
    {
      name: "Fun Night In",
      github: "https://github.com/lilyso/fun-night-in",
      link: "https://lilyso.github.io/fun-night-in/",
      src: "/fun-night-in.png",
      alt: "fun night in homepage",
      desc: "Random Movie and Meal Generator.",
      role: "Front-End: UX, UI",
    },
  ]
  return (
    <div className="pt-4">
      <div className="md:m-8 lg:m-12 border-solid border-l border-yellow-300">
        <LazyShow>
          <div className="flex flex-wrap text-yellow-300">
            <h2 className="p-4 mx-4 text-6xl textshadow">Projects</h2>
          </div>
        </LazyShow>
        <LazyShow>
          <div className="m-4 flex flex-wrap gap-2">
            {projectCards &&
              projectCards.map(projectCard => (
                <div className="boxshadow p-4 m-2 rounded-xl border-solid border border-yellow-300 text-white w-full md:w-1/3 lg:w-1/4">
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
        </LazyShow>
      </div>
    </div>
  )
}

export default Projects
