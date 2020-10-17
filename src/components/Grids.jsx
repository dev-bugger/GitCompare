import React from "react";
import { Row, Col, Spin } from "antd";
import Cards from "./Cards";

const classes = {
    root: {
        width: "100%",
        margin: 0,
        overflowY: "auto",
        overflowX: "hidden",
        height: "calc(100vh - 7rem)"
    },
    col: { padding: "1rem", minHeight: 0 },
    spin: {
        width: "20vw",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1
    }
};

const Grids = ({ loading, userData }) => {
    return (
        <Row
            gutter={[16, 16]}
            justify="center"
            align="middle"
            style={classes.root}
        >
            <Spin style={classes.spin} spinning={loading} />
            {!loading &&
                userData.map((user) => (
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        key={user.id}
                        style={classes.col}
                    >
                        <Cards userData={user} />
                    </Col>
                ))}
        </Row>
    );
};
export default Grids;
