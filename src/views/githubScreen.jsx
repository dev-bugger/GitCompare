/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Layout, Alert, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import "../App.css";
import { handleAlert } from "../actions";
import WelcomeContent from "../components/WelcomeContent";
import TimelineDiv from "../components/Timeline";
import Grids from "../components/Grids";

const { Content } = Layout;

function GitHubScreen() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const alertMsg = useSelector((state) => state.alertMsg);
    const alertOpen = useSelector((state) => state.alertOpen);
    const userNames = useSelector((state) => state.userNames);

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
                    {/* WELCOME SCREEN */}
                    {userNames.length === 0 && <WelcomeContent />}

                    {/* COMPARE SCREEN */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        }}
                    >
                        <TimelineDiv />

                        {(userNames.length !== 0 || loading) && (
                            <Divider
                                type="vertical"
                                style={{
                                    height: "80vh",
                                    borderLeft:
                                        "0.2rem solid rgba(0, 0, 0, 0.06)",
                                }}
                            />
                        )}

                        <Grids />
                    </div>
                </Content>
            </Layout>
        </>
    );
}

export default GitHubScreen;
