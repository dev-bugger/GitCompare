import { Divider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Grids from "../components/Grids";
import TimelineDiv from "../components/Timeline";
import { sortData } from "../utils/sort";

const classes = {
    root: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    divider: {
        height: "85vh",
        borderLeft: "0.2rem solid rgba(0, 0, 0, 0.06)"
    }
};

const MainScreen = () => {
    const loading = useSelector((state) => state.userReducer.loading);
    const sort = useSelector((state) => state.timelineReducer.sort);
    let userData = useSelector((state) => state.userReducer.userData);
    userData = userData.sort((a, b) => sortData(a, b, sort));

    return (
        <div style={classes.root}>
            <TimelineDiv loading={loading} userData={userData} sort={sort} />
            <Divider type="vertical" style={classes.divider} />
            <Grids loading={loading} userData={userData} />
        </div>
    );
};

export default MainScreen;
