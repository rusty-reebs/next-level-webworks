import React from "react";
import Hello from "./components/Hello";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="h-screen bg-grey font-manrope">
      <Hello />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
