import React from "react";
import { useSelector } from "react-redux";
import Grids from "../components/Grids";
import SortDrawer from "../components/SortDrawer";
import TimelineDiv from "../components/Timeline";
import { sortData } from "../utils/sort";

const classes = {
    root: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    }
};

const MainScreen = () => {
    const loading = useSelector((state) => state.userReducer.loading);
    const sort = useSelector((state) => state.timelineReducer.sort);
    let userData = useSelector((state) => state.userReducer.userData);
    userData = userData.sort((a, b) => sortData(a, b, sort));

    return (
        <div style={classes.root}>
            <SortDrawer>
                <TimelineDiv
                    loading={loading}
                    userData={userData}
                    sort={sort}
                />
            </SortDrawer>
            <Grids loading={loading} userData={userData} />
        </div>
    );
};

export default MainScreen;
