import React from "react";
import Base from "./components/Base";
import "antd/dist/antd.css";
import { HashRouter } from "react-router-dom";
import StartScreen from "./views/StartScreen";
import { useSelector } from "react-redux";
import MainScreen from "./views/MainScreen";

function App() {
    const screen = useSelector((state) => state.userReducer.screen);
    return (
        <HashRouter>
            <Base>{!screen ? <StartScreen /> : <MainScreen />}</Base>
        </HashRouter>
    );
}

export default App;
