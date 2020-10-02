import React from "react";
import "./App.css";
import GitHubScreen from "./views/githubScreen";
import "antd/dist/antd.css";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <div className="App">
      <GitHubScreen />
    </div>
    </HashRouter>
  );
}

export default App;
