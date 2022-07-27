import React from "react";
import "./assets/reset.css";
import "./App.css";
import Header from "./components/Header";
import Child from "./components/Child";
import Forms from "./components/Forms";
import Movie from "./components/Movie";

function App() {
  return (
    <>
      <div id="App">
        <Header />
        <Child />
        <Forms />
        <Movie name="hihi" />
      </div>
    </>
  );
}

export default App;
