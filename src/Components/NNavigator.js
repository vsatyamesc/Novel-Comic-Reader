import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Navigator = ({ current }) => {
  const navigate = useNavigate();
  const [chaps, setChap] = useState([]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);

  useEffect(() => {
    function fetch_keys(chaps) {
      var keys = Object.keys(chaps);
      return keys;
    }

    const fetchChapters = async () => {
      try {
        const response = await fetch("http://localhost:3001/chapter.json"); //
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        const data = await response.json();
        const arr = await fetch_keys(data);
        const prevChapter = parseInt(current) - 1;
        const nextChapter = parseInt(current) + 1;
        setPrev(arr.includes(prevChapter.toString()) ? prevChapter : null);
        setNext(arr.includes(nextChapter.toString()) ? nextChapter : null);
        setChap(arr);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChapters();
  }, [current]);

  const handleClick = (chapterId) => {
    navigate(`/Chapter/${chapterId}`);
  };

  return (
    <div className="flex flex-row gap-1 w-auto md:w-[20vw] justify-end">
      {prev ? (
        <FaLongArrowAltLeft
          className="size-4 translate-y-[4px] bg-purple hover:bg-red min-w-[10vw] md:min-w-[5vw] rounded-sm"
          style={{ color: "#d3dce6" }}
          onClick={() => {
            handleClick(prev);
          }}
        />
      ) : (
        <></>
      )}

      <div className="translate-y-[4px] min-w-[32vw] md:min-w-[12vw] lg:min-w-[12vw] xl:min-w-[8.5vw] bg-purple text-gray-light text-center rounded-sm">
        <select
          className="bg-purple"
          value={current}
          onChange={(e) => handleClick(e.target.value)}
        >
          {chaps.map((chapter, index) => (
            <option key={index} value={chapter}>
              Chapter {chapter}
            </option>
          ))}
        </select>
      </div>
      {next ? (
        <FaLongArrowAltRight
          className="size-4 translate-y-[4px] bg-purple hover:bg-red min-w-[10vw] md:min-w-[5vw] rounded-sm "
          style={{ color: "#d3dce6" }}
          onClick={() => {
            handleClick(next);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navigator;
