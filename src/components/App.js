import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <h1 data-ns-test="project-name">Project NAME1</h1>
      <p data-ns-test="project-description">Project description 1</p>
      <h1 data-ns-test="project-name">Project NAME2</h1>
      <p data-ns-test="project-description">Project description 2</p>
    </>
  );
};

export default App;
