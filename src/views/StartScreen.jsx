import React from "react";
import { Typography } from "antd";
import logo from "../assests/logo.png";
const classes = {
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%"
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
    image: { height: "4rem", width: "4rem", margin: "1rem" }
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
                    GIT-HUB COMPARE
                </Typography.Title>
            </Typography>
            <img src={logo} alt="logo" style={classes.image} />
        </div>
    );
};
export default StartScreen;
