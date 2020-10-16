/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button, Tooltip } from "antd";
import { SyncOutlined, EyeOutlined } from "@ant-design/icons";
import { handleReset, setAlert, closeAlert } from "../actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../actions";
import sort from "../assests/sort.png";

const classes = {
    btn: {
        position: "fixed",
        right: "2vw",
        zIndex: 1
    },
    sortBtn: {
        height: "fit-content"
    },
    img: { width: "1rem", height: "1rem" }
};
const Buttons = () => {
    const history = useHistory();
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
        <>
            <Tooltip classname="tooltip" placement="left" title="SORT">
                <Button
                    shape="round"
                    style={{ ...classes.btn, ...classes.sortBtn, top: "12vh" }}
                    onClick={() => dispatch(toggleDrawer(true))}
                >
                    <img src={sort} alt="sort" style={classes.img} />
                </Button>
            </Tooltip>

            <Tooltip classname="tooltip" placement="left" title="RESET">
                <Button
                    onClick={handleOnReset}
                    style={{ ...classes.btn, top: "18vh" }}
                >
                    <SyncOutlined />
                </Button>
            </Tooltip>
            <Tooltip
                classname="tooltip"
                placement="left"
                title="Get Shareable Link"
            >
                <Button
                    onClick={copyToClipboard}
                    style={{ ...classes.btn, top: "24vh" }}
                >
                    <EyeOutlined />
                </Button>
            </Tooltip>
        </>
    );
};

export default Buttons;
