import { Alert } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../actions";

const classes = {
    notice: {
        position: "fixed",
        top: "12vh",
        right: "2vw"
    },
    error: {}
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
