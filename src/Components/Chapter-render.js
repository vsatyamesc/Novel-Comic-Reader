import React, { useState, useEffect } from "react";
import Navigator from "./NNavigator";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import desc from "./Files/description-copy.json";
import Footer from "./Footer";
const Chapter_render = () => {
  const navigate = useNavigate();
  const [content, getContent] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchContent = async () => {
      let res = await fetch(`http://localhost:3001/Chapter/text.txt?${id}`); //http://localhost:3001/
      if (!res.ok) {
        getContent("Failed to Load");
      } else {
        getContent(await res.text());
      }
    };

    fetchContent();
  }, [id]);
  return (
    <div className="bg-[#262626] min-h-[100vh] h-[100%] w-[100%]">
      {/* if there is content which doesn't cover 100% of the Window Height you need to use h-[100vh] else use 100% to cover full page md:h-[100%] md:w-[100%]*/}
      <Navbar />
      <div className="grid grid-flow-col">
        <div className="flex flex-row text-[0.8rem] underline underline-offset-2 bg-gray-light mb-1 md:mb-1 ">
          <p
            onClick={() => {
              navigate("/");
            }}
            className="hover:text-purple ml-3 mx-[10vw] mb-[2px] md:mx-[14vw]"
          >
            {desc[0]["value"]}/Chapter/{id}
          </p>
        </div>
      </div>
      {/*md:mx-[8vw]  */}
      <div className="flex justify-end mb-2 mx-4 md:mx-[14vw] lg:mx-[10vw] xl:mx-[14vw]">
        <Navigator current={id} />
      </div>
      <div className="bg-[#262626] text-gray-light text-justify mx-[6vw] md:mx-[8vw] lg:mx-[10vw] xl:mx-[14vw] ">
        {content.split("\n").map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Chapter_render;
