/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Typography, Space, Layout } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import compareIcon from "../assests/compare1.png";
import Search from "./Search";

const { Title } = Typography;

const classes = {
    header: {
        position: "fixed",
        width: "100vw",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1vh 2vw"
    },
    headerSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    avatar: { height: "4rem", width: "4rem", borderRadius: 0 },
    title: {
        color: "#ffffff",
        fontSize: "2rem",
        whiteSpace: "nowrap",
        margin: 0
    },
    button: { marginRight: "0.5rem" },
    btn: {
        position: "fixed",
        top: "15vh"
    }
};

function Header(props) {
    return (
        <Layout.Header style={classes.header}>
            <div style={classes.headerSection}>
                <Space>
                    <Avatar src={compareIcon} style={classes.avatar} />
                    <Typography>
                        <Title style={classes.title}>GitHub Compare</Title>
                    </Typography>
                </Space>
            </div>

            <div style={classes.headerSection}>
                <Search />
            </div>
        </Layout.Header>
    );
}

export default Header;
