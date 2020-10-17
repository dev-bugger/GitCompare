import React from "react";
import { HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Base from "./components/Base";
import StartScreen from "./views/StartScreen";
import MainScreen from "./views/MainScreen";
import "antd/dist/antd.css";
import "./styles.css";

function App() {
    const screen = useSelector((state) => state.userReducer.screen);
    return (
        <HashRouter>
            <Base>{!screen ? <StartScreen /> : <MainScreen />}</Base>
        </HashRouter>
    );
}

export default App;
