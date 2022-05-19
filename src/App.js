import React from "react";
import Hello from "./components/Hello";
import Projects from "./components/Projects";
import About from "./components/About";
import Tools from "./components/Tools";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="h-screen bg-grey font-manrope">
      <Hello />
      <Projects />
      <About />
      <Tools />
      <Contact />
    </div>
  );
};

export default App;
