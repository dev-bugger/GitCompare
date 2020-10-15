import React from "react";
import "./App.css";
import Base from "./components/Base";
import "antd/dist/antd.css";
import { HashRouter } from "react-router-dom";
import StartScreen from "./views/StartScreen";
import { useSelector } from "react-redux";
import MainScreen from "./views/MainScreen";

function App() {
    const screen = useSelector((state) => state.screen);
    return (
        <HashRouter>
            <div className="App">
                <Base>{!screen ? <StartScreen /> : <MainScreen />}</Base>
            </div>
        </HashRouter>
    );
}

export default App;
