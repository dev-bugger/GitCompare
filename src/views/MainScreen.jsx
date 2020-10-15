import { Divider } from "antd";
import React from "react";
import Grids from "../components/Grids";
import TimelineDiv from "../components/Timeline";

const MainScreen = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}
        >
            <TimelineDiv />
            <Divider
                type="vertical"
                style={{
                    height: "80vh",
                    borderLeft: "0.2rem solid rgba(0, 0, 0, 0.06)",
                }}
            />

            <Grids />
        </div>
    );
};

export default MainScreen;
