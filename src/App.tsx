import React from "react";
import { getLocaleWeather } from "./api/openWeather";

function App() {
  getLocaleWeather("São Paulo");
  return <div className="App"></div>;
}

export default App;
