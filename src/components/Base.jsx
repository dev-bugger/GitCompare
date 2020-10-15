/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import "../styles.css";
import UniversalAlert from "./UniversalAlert";

const { Content } = Layout;

function Base(props) {
    const { children } = props;
    return (
        <div className="root">
            <Layout className="Layout">
                <Header />
                <Content
                    style={{
                        marginTop: "10vh",
                        padding: "1rem 1rem 1rem",
                        height: "90vh"
                    }}
                >
                    <UniversalAlert />
                    {children}
                </Content>
            </Layout>
        </div>
    );
}

export default Base;
