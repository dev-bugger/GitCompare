import React from "react";
import { Typography } from "antd";
import logo from "../assests/icon.gif";
const classes = {
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "calc(100vh - 7rem)"
    },
    divider: {
        height: "85vh",
        borderLeft: "0.2rem solid rgba(0, 0, 0, 0.06)",
        margin: 0
    },
    title: {
        color: "#001529",
        fontSize: "2rem",
        margin: 0,
        lineHeight: "3rem"
    },
    image: { height: "10rem", width: "10rem", margin: "0.5rem" }
};

const StartScreen = (props) => {
    return (
        <div style={classes.root}>
            <Typography>
                <Typography.Title style={classes.title}>
                    Start comparing
                    <br />
                    with
                    <br />
                    <img src={logo} alt="logo" style={classes.image} />
                    <br />
                    GIT-HUB COMPARE
                </Typography.Title>
            </Typography>
        </div>
    );
};
export default StartScreen;
