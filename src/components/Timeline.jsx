import React from "react";
import { Timeline, Dropdown, Menu, Spin, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { ThunderboltOutlined } from "@ant-design/icons";
import { setSort } from "../actions";
import { sortType as timeline } from "./../utils/sort";

const classes = {
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    timeline: {
        width: "20vw",
        paddingTop: "4vh",
        paddingLeft: "0",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column"
    },
    timelineItem: {},
    spin: { width: "20vw", margin: "15% auto" },
    btn: {
        width: "100%"
    }
};

const TimelineDiv = ({ loading, userData, sort }) => {
    const dispatch = useDispatch();

    const handleSort = (event) => {
        dispatch(setSort(event.key));
    };

    const menu = (
        <Menu onClick={handleSort}>
            {Object.keys(timeline).map((key) => (
                <Menu.Item key={key}>{timeline[key]}</Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div style={classes.root}>
            <Dropdown.Button
                overlay={menu}
                icon={<ThunderboltOutlined />}
                disabled={userData.length < 2}
                style={classes.btn}
                className="sort-btn"
            >
                Sort by {sort}
            </Dropdown.Button>

            {loading ? (
                <Spin style={classes.spin} />
            ) : (
                <Timeline style={classes.timeline} mode="left">
                    {userData.map((user) => (
                        <Tooltip
                            classname="tooltip"
                            title={`${timeline[sort]}: ${user[sort]}`}
                            placement="top"
                            key={Math.random() * 1000}
                        >
                            <Timeline.Item
                                style={classes.timelineItem}
                                className="item"
                                color="#001529"
                            >
                                {user.login}
                            </Timeline.Item>
                        </Tooltip>
                    ))}
                </Timeline>
            )}
        </div>
    );
};

export default TimelineDiv;
