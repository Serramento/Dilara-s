import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const InstagramContent = (props) => {
  return (
    <div className="shadow-md w-80 lg:w-65 bg-[#FAFAFA]">
      <div>
        <div className="h-80 lg:h-65 relative">
          <img src={props.post.image} className="w-full h-full object-cover " />
        </div>

        <div className="m-7 text-left">
          <h4 className="text-xl font-semibold mt-3 text-[#98B8DF]">
            {props.post.title}
          </h4>
          <p className="text-[#C0BABA] text-sm font-semibold text-left mt-3">
            {props.post.description}
          </p>
          <div className="flex flex-row justify-between mt-7">
            <div className="flex flex-row text-bluex">
              <i className="fa-regular fa-clock"></i>
              <p className="text-[#C0BABA] text-xs font-semibold pl-1">
                22 April 2021
              </p>
            </div>
            <div className="flex flex-row text-[#98B8DF]">
              <i className="fa-solid fa-chart-line"></i>
              <p className="text-[#C0BABA] text-xs font-semibold pl-1">
                10 comments
              </p>
            </div>
          </div>
          <div className="text-bluex">
            <button className="text-[#39405A] font-bold text-sm mt-7 pr-1 mb-10 lg:mb-3">
              Aprender Más
            </button>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="sm"
              className="text-[#98B8DF] z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramContent;
