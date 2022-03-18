import React, { Component } from "react"
import Slider from "react-slick"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

export default class AutoPlayMethods extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      vertical: true,
    }
    return (
      <div className="w-full lg:w-1/2">
        <Slider {...settings}>
          <div className="text-white">
            <h3 className="text-center text-2xl lg:text-4xl p-4">
              {" "}
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "white" }}
                className="px-2"
              />
              DIGITAL MARKETING
            </h3>
          </div>
          <div>
            <h3 className="text-center text-2xl lg:text-4xl p-4">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "white" }}
                className="px-2"
              />
              WEB DEVELOPMENT
            </h3>
          </div>
          <div>
            <h3 className="text-center text-2xl lg:text-4xl p-4">
              {" "}
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "white" }}
                className="px-2"
              />
              STRATEGY
            </h3>
          </div>
          <div>
            <h3 className="text-center text-2xl lg:text-4xl p-4">
              {" "}
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "white" }}
                className="px-2"
              />
              CONTENT
            </h3>
          </div>
        </Slider>
      </div>
    )
  }
}
