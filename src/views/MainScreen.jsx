import { Divider } from "antd";
import React from "react";
import Grids from "../components/Grids";
import TimelineDiv from "../components/Timeline";

const classes = {
    root: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    divider: {
        height: "85vh",
        borderLeft: "0.2rem solid rgba(0, 0, 0, 0.06)",
    },
};

const MainScreen = () => {
    return (
        <div style={classes.root}>
            <TimelineDiv />
            <Divider type="vertical" style={classes.divider} />
            <Grids />
        </div>
    );
};

export default MainScreen;
