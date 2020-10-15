import React from "react";
import { Divider, Typography } from "antd";
import logo from "../assests/logo.png";
const classes = {
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    divider: {
        height: "85vh",
        borderLeft: "0.2rem solid rgba(0, 0, 0, 0.06)",
        margin: 0,
    },
    title: {
        color: "#001529",
        fontSize: "2rem",
        margin: 0,
    },
    image: { height: "4rem", width: "4rem", margin: "2rem" },
};

const StartScreen = (props) => {
    return (
        <div style={classes.root}>
            <div style={{ width: "20vw" }}>
                <img src={logo} alt="logo" style={classes.image} />
            </div>
            <Divider type="vertical" style={classes.divider} />
            <div
                style={{
                    width: "100%",
                }}
            >
                <Typography>
                    <Typography.Title style={classes.title}>
                        Let's get started...
                    </Typography.Title>
                </Typography>
            </div>
        </div>
    );
};
export default StartScreen;
