import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Chapter from "./Components/Chapter-render";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Chapter/:id" element={<Chapter />} />
    </Routes>
  );
}

export default App;
