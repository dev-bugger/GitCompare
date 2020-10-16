import { Alert } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../actions";

const classes = {
    notice: {
        position: "fixed",
        bottom: "2vh",
        right: "2vw",
        zIndex: 2
    },
    error: {
        position: "fixed",
        top: "12vh",
        right: "20vw",
        minWidth: "50%",
        zIndex: 2
    }
};

const UniversalAlert = () => {
    const { type, text, open, status } = useSelector(
        (state) => state.alertReducer
    );
    const dispatch = useDispatch();
    if (!open) return null;
    return (
        <Alert
            message={text}
            type={type}
            closable
            onClose={() => dispatch(closeAlert())}
            style={classes[status]}
        />
    );
};

export default UniversalAlert;
