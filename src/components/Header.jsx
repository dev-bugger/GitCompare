/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button, Typography, Space, Layout, Tooltip } from "antd";
import { SyncOutlined, EyeOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { handleReset, setAlert, closeAlert } from "../actions";
import compareIcon from "../assests/compare.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    avatar: { height: "3rem", width: "3rem" },
    title: {
        color: "white",
        fontSize: "2rem",
        margin: 0
    },
    button: { marginRight: "0.5rem" }
};

function Header(props) {
    let history = useHistory();
    const dispatch = useDispatch();

    const handleOnReset = () => {
        dispatch(handleReset());
        history.replace("");
    };

    const copyToClipboard = async () => {
        const link = window.location.href;
        await navigator.clipboard
            .writeText(link)
            .then(() => {
                dispatch(
                    setAlert({
                        text: "Successfully Copied",
                        type: "success",
                        status: "notice"
                    })
                );
                setTimeout(() => {
                    dispatch(closeAlert());
                }, 3000);
            })
            .catch(() => {
                dispatch(
                    setAlert({
                        text: "Failed to Copy Link",
                        type: "failure",
                        status: "notice"
                    })
                );
                setTimeout(() => {
                    dispatch(closeAlert());
                }, 3000);
            });
    };

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
                <Button
                    shape="circle"
                    onClick={handleOnReset}
                    style={classes.button}
                >
                    <Tooltip title="RESET">
                        <SyncOutlined />
                    </Tooltip>
                </Button>

                <Button shape="circle" onClick={copyToClipboard}>
                    <Tooltip title="Get Shareable Link">
                        <EyeOutlined />
                    </Tooltip>
                </Button>
            </div>
        </Layout.Header>
    );
}

export default Header;
