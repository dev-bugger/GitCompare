/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import UniversalAlert from "./UniversalAlert";

const { Content } = Layout;

const classes = {
    content: {
        marginTop: "5rem",
        padding: "1rem 1rem 1rem",
        height: "calc(100vh - 5rem)",
        overflowY: "auto"
    },
    root: {
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        textAlign: "center",
        background: "#f0f2f5",
        overflow: "hidden",
        fontFamily: "Palatino Linotype"
    }
};

function Base(props) {
    const { children } = props;
    return (
        <div style={classes.root}>
            <Layout>
                <Header />
                <Content style={classes.content}>
                    <UniversalAlert />
                    {children}
                </Content>
            </Layout>
        </div>
    );
}

export default Base;
