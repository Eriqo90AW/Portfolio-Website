import "./App.css";
import "./bootstrap.min.css";
import React from "react";
import {
  Navibar,
  Home,
  About,
  Skills,
  Projects,
  Contacts,
  Footbar,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App" id="home">
        <Navibar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contacts />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
        <Footbar />
      </div>
    </Router>
  );
};

export default App;
