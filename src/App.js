import React from "react";
import { useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import Base from "./components/Base";
import MainScreen from "./views/MainScreen";
import StartScreen from "./views/StartScreen";
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
