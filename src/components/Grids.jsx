import React from "react";
import { Row, Col, Spin } from "antd";
import Cards from "./Cards";

const classes = {
    root: {
        width: "100%",
        margin: 0,
        overflow: "auto",
        height: "86vh"
    },
    col: { padding: "1rem", minHeight: 0 },
    spin: { width: "20vw", margin: "15% auto" }
};

const Grids = ({ loading, userData }) => {
    return (
        <Row
            gutter={[16, 16]}
            justify="center"
            align="middle"
            style={classes.root}
        >
            {!loading ? (
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
                ))
            ) : (
                <Spin style={classes.spin} />
            )}
        </Row>
    );
};
export default Grids;
