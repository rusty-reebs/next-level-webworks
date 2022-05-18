import React from "react";
import Hello from "./components/Hello";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="h-screen bg-grey font-manrope">
      <Hello />
      <Projects />
    </div>
  );
};

export default App;
