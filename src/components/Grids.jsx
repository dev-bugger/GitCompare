import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Spin } from "antd";
import Cards from "./Cards";
import { sortData } from "../utils/sort";

function Grids(props) {
    const timeline = {
        followers: "Followers",
        public_repos: "Public Repos",
        public_gists: "Public Gists",
        following: "Following"
    };

    const sortCriteria = [...Object.keys(timeline)];

    const sort = useSelector((state) => state.timelineReducer.sort);
    const loading = useSelector((state) => state.userReducer.loading);
    let userData = useSelector((state) => state.userReducer.userData);
    userData = userData.sort((a, b) =>
        sortData(
            a,
            b,
            sort,
            sortCriteria.filter((s) => s !== sort)
        )
    );
    return (
        <Row
            gutter={[16, 16]}
            justify="center"
            align="middle"
            style={{
                width: "100%",
                margin: 0,
                overflow: "auto",
                height: "80vh"
            }}
        >
            {!loading ? (
                userData.map((user) => (
                    <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={8}
                        key={user.id}
                        style={{ padding: "1rem", minHeight: 0 }}
                    >
                        <Cards userData={user} />
                    </Col>
                ))
            ) : (
                <Spin style={{ width: "20vw", margin: "15% auto" }} />
            )}
        </Row>
    );
}
export default Grids;
