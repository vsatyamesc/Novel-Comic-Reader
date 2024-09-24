import React, { useState, useEffect } from "react";
import Navigator from "./NNavigator-image";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import desc from "./Files/description-copy.json";
import Footer from "./Footer";
const Chapter_render = () => {
  const navigate = useNavigate();
  const [content, getContent] = useState({});
  const { id } = useParams();
  let uri = `/`; //http://localhost:3001
  function fetch_keys(chaps) {
    var keys = Object.keys(chaps);
    return keys.sort();
  }
  useEffect(() => {
    const fetchContent = async () => {
      let uri = `/Chapter/Images/${id}`; //http://localhost:3001
      let res = await fetch(uri + `/image.json`);
      if (!res.ok) {
        getContent("Failed to Load");
      } else {
        const newData = await res.json();
        getContent(() => newData);
      }
    };

    fetchContent();
  }, [id]);
  return (
    <div className="bg-[#262626] h-[100%] w-[100%] md:h-[100%] md:w-[100%]">
      {/* if there is content which doesn't cover 100% of the Window Height you need to use h-[100vh] else use 100% to cover full page*/}
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
      <div className="flex justify-center mb-2 mx-4 md:mx-[14vw] lg:mx-[10vw] xl:mx-[14vw]">
        <Navigator current={id} />
      </div>
      <div className="flex flex-col items-center bg-[#262626] mx-[6vw] md:mx-[8vw] lg:mx-[10vw] xl:mx-[14vw] gap-1">
        {fetch_keys(content).map((images, index) => (
          <React.Fragment key={index}>
            <img
              className="h-[70%] w-auto"
              src={uri + content[images]["path"]}
              alt={content[images]["alt_name"]}
            />
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mb-2 mx-4 md:mx-[14vw] lg:mx-[10vw] xl:mx-[14vw]">
        <Navigator current={id} />
      </div>
      <Footer />
    </div>
  );
};
export default Chapter_render;
