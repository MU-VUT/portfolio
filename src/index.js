import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Nav from "./components/Nav.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Curriculum from "./pages/Curriculum.js";
import Start from "./pages/Start.js";
import GameApp from "./game/Game.js";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/" element={<Nav />}>
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="curriculum" element={<Curriculum />} />
          </Route>
          <Route path="game" element={<GameApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
