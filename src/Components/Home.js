import "./Home.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Summary from "./Manga-summary";
import Chapter from "./Chapter";
import Footer from "./Footer";
const Home = () => {
  const [chaps, setChap] = useState({});
  function fetch_keys(chaps) {
    var keys = Object.keys(chaps);
    return keys;
  }
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch("http://localhost:3001/chapter.json");
        if (!response.ok) {
          throw new Error("Failed to fetch chapters");
        }
        const data = await response.json();
        setChap(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChapters();
  }, []);
  return (
    <div className="flex flex-col gap-0 bg-[#262626] min-h-[100vh] h-[100%] w-[100%] ">
      <Navbar />
      <Summary latest={Math.max(...fetch_keys(chaps))} />
      <Chapter chaps={chaps} />
      <Footer />
    </div>
  );
};
export default Home;
