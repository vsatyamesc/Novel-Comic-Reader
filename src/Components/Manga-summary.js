import React from "react";
import { useNavigate } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import MangaLogo from "../Images/LOGO.png";
import summary from "./Files/description-copy.json";
const Summary = ({ latest }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-flow-row-dense gap-x-[1vw] grid-cols-1 lg:grid-cols-4 md:grid-cols-4 mt-5 h-auto sm:mx-[5vw] md:mx-[20vw] md:gap-x-6">
      <div className="flex flex-col mx-auto rounded-xl col-span-1 ">
        <div>
          <img
            src={MangaLogo}
            className="h-auto max-h-[50vh] max-w-[50vw] lg:max-h-[40vh] lg:max-w-[15vw] md:max-h-[40vh] md:max-w-[15vw] z-50 m-auto rounded-md"
            alt="Manga Logo"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 justify-center align-middle m-1">
          <button
            onClick={() => {
              navigate("/Chapter/1");
            }}
            className="bg-purple rounded-md text-gray-light text-sm p-1 hover:bg-red"
          >
            Read First
          </button>
          <button
            className="bg-purple rounded-md text-gray-light text-sm p-1 hover:bg-red"
            onClick={() => {
              navigate(`/Chapter/${latest}`);
            }}
          >
            Read Latest
          </button>
        </div>
      </div>
      <div className="flex mx-auto rounded-xl p-4 lg:pl-4 max-w-[90vw] lg:max-w-[45vw] bg-[#1a1a1a] sm:col-span-1 md:col-span-3 lg:col-span-3 text-gray-light font-mono align-middle justify-center md:p-2 lg:p-4">
        <div className="lg:grid lg:grid-flow-row-dense md:grid-cols-1 lg:grid-cols-6 ">
          {summary.map((data, index) => (
            <React.Fragment key={index}>
              <p className="font-bold col-span-1 md:mr-4 md:min-w-[14rem] xl:min-w-[5rem]">
                {data.label}
              </p>
              <p className="col-span-1 lg:col-span-5 md:mx-6 xl:mx-[1px]">
                {data.value}
              </p>
            </React.Fragment>
          ))}
          <p className="font-bold lg:col-span-1  md:mr-2 md:min-w-[12rem] xl:min-w-[5rem]">
            Rating :
          </p>
          <span className="col-span-5 flex flex-row star md:mx-[3rem] xl:mx-[1px]">
            <IoStar className="size-3 translate-y-[4px]" />
            <IoStar className="size-3 translate-y-[4px]" />
            <IoStar className="size-3 translate-y-[4px]" />
            <IoStar className="size-3 translate-y-[4px]" />
            <IoStar className="size-3 translate-y-[4px]" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Summary;
