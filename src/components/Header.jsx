/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Typography, Space, Layout, Tooltip } from "antd";
import { UserOutlined, SyncOutlined, EyeOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import {
    getUserName,
    setUserProfileData,
    setLoading,
    handleError,
    handleReset,
    setAlert,
    closeAlert
} from "../actions";
import compareIcon from "../assests/compare.png";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

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
    const [input, setInput] = useState("");
    let history = useHistory();
    const ref = useRef(null);
    const userNames = useSelector((state) => state.userReducer.userNames);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleClick = () => {
        if (userNames.indexOf(input) === -1) {
            let query =
                userNames.length === 0
                    ? input
                    : userNames.join(",") + "," + input;
            history.replace(`?usernames=${query}`);
        }
        setInput("");
        ref.current.focus();
    };

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
    const getGitHubData = async (input, i) => {
        await Axios.get(`https://api.github.com/users/${input}`)
            .then((response) => {
                dispatch(setUserProfileData(response.data));
            })
            .catch((error) => {
                input = input.replace("%20", " ");
                dispatch(handleError(input));
                dispatch(
                    setAlert({
                        text: `Username ${input} DOES NOT EXSIT`,
                        type: "warning",
                        status: "error"
                    })
                );
                let query = history.location.search;
                query = query.replace("?usernames=", "");
                query = query.split(",");
                query = query.filter((q) => q !== input);
                query.length === 0
                    ? history.replace("")
                    : history.replace(`?usernames=${query.join(",")}`);

                setTimeout(() => {
                    dispatch(closeAlert());
                }, 3000);
            });

        if (i) dispatch(setLoading(false));
    };

    useEffect(() => {
        let query = history.location.search;

        if (!query.trim()) return;
        query = query.replace("?usernames=", "");
        query = query.split(",");
        dispatch(setLoading(true));
        dispatch(getUserName(query));
        query.forEach((q, i) => {
            getGitHubData(q, i === query.length - 1);
        });
    }, [history.location.search]);

    useEffect(() => {
        ref.current.focus();
    }, []);

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
                <Input
                    placeholder="Enter UserName"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    style={{ width: "15vw" }}
                    value={input}
                    onChange={handleChange}
                    ref={ref}
                    onPressEnter={handleClick}
                    allowClear
                />

                <Button
                    style={classes.button}
                    disabled={!Boolean(input.trim())}
                    onClick={handleClick}
                >
                    Compare
                </Button>
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
