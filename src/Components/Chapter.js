import React, { useState } from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import "./secondary.css";
const Chapter = ({ chaps }) => {
  const [order, setOrder] = useState(1);
  const [renderKey, setRenderKey] = useState(0);
  function fetch_keys(chaps, order) {
    var keys = Object.keys(chaps);
    if (order === 0) {
      return keys.sort();
    } else {
      return keys.reverse();
    }
  }

  const toggleOrder = () => {
    setOrder(order === 0 ? 1 : 0); // Toggle order between 0 and 1
    setRenderKey((prevKey) => prevKey + 1); // Update render key to trigger re-render
  };
  const handleClick = (chapterId) => {
    navigate(`/Chapter/${chapterId}`);
  };
  const navigate = useNavigate();
  return (
    //sm:mx-[5vw] md:mx-[20vw] md:gap-x-6
    <div className="flex flex-col bg-[#1a1a1a] mt-[3vh] sm:mx-[5vw] md:mx-[20vw] md:gap-x-6 xl:mx-[20vw] rounded-xl h-auto min-h-[30vh]">
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-row">
          <h1 className="text-2xl font-bold my-2 text-purple gray-light text-center underline decoration-2 underline-offset-4">
            Chapter List
          </h1>
          <button onClick={toggleOrder}>
            <span className="Arrow" id="Arrow">
              <LuArrowDownUp
                className="size-4 translate-y-[4px] translate-x-1"
                style={{ color: "#7e5bef" }}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <hr className="break-line" />
      </div>
      <div
        className="grid grid-flow-row grid-cols-2 md:grid-cols-4 xl:grid-cols-6 text-gray-light text-lg text-center gap-1 mb-4"
        id="chapter-list"
      >
        {fetch_keys(chaps, order).map((chapter, index) => (
          <a
            href={`/Chapter/${chaps[chapter]["id"]}`}
            key={chaps[chapter]["id"]}
            className={`my-1 font-medium hover:text-purple hover:border-l-2 focus:text-purple focus:border-l-2 ${
              chaps[chapter]["id"] ===
              parseInt(`${Math.max(...fetch_keys(chaps, 0))}`)
                ? "text-red"
                : "text-inherit"
            }`}
            onClick={() => {
              handleClick(chaps[chapter]["id"]);
            }}
            id={
              chaps[chapter]["id"] ===
              parseInt(`${Math.max(...fetch_keys(chaps, 0))}`)
                ? "latest"
                : chaps[chapter]["id"]
            }
          >
            {chaps[chapter]["name"]}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Chapter;
