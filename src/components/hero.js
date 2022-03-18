import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Slide, SlideSlow, SlideLeft } from "./slide"
import Drag from "./drag"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="p-4 mx-auto flex flex-wrap md:flex-no-wrap lg:flex-no-wrap items-center">
      <div className="w-full lg:w-1/2 p-8">
        <Slide>
          <h1 className="text-center md:text-left lg:text-left bg-black text-white text-8xl">
            LILY SO
          </h1>
        </Slide>
        <SlideSlow>
          <p className=" text-yellow-300 text-6xl text-center md:text-left lg:text-left">
            Full Stack Developer <br /> &amp; Digital Marketing Specialist
          </p>
        </SlideSlow>
      </div>

      <div className="w-full lg:w-1/2 p-4 text-center">
        <SlideLeft>
          <StaticImage
            className="max-w-sm rounded-full"
            src="../images/lily.jpg"
            alt="lily so"
          />
        </SlideLeft>
      </div>
    </div>
  )
}

export default Hero
