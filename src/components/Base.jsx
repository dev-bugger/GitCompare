/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Layout, Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import "../App.css";
import { handleAlert } from "../actions";

const { Content } = Layout;

function Base(props) {
    const { children } = props;
    const dispatch = useDispatch();
    const alertMsg = useSelector((state) => state.alertMsg);
    const alertOpen = useSelector((state) => state.alertOpen);

    const handleOnClose = () => {
        dispatch(handleAlert(false));
    };

    return (
        <>
            <Layout className="Layout">
                <Header />
                <Content
                    style={{
                        marginTop: "15vh",
                        padding: "1rem 1rem 1rem",
                        //overflowY: "auto",
                        height: "85vh",
                    }}
                >
                    {alertOpen && (
                        <Alert
                            message={`Username ${alertMsg} does not exist!`}
                            type="warning"
                            closable
                            onClose={handleOnClose}
                        />
                    )}
                    {children}
                </Content>
            </Layout>
        </>
    );
}

export default Base;
