import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Spin } from "antd";
import ProfileCard from "./ProfileCard";
import { sortData } from "../utils/sort";

function CardGrid(props) {
  const timeline = {
    followers: "Followers",
    public_repos: "Public Repos",
    public_gists: "Public Gists",
    following: "Following"
  };

  const sortCriteria = [...Object.keys(timeline)];

  const sort = useSelector((state) => state.sort);
  const loading = useSelector((state) => state.loading);
  let userData = useSelector((state) => state.userData);
  userData = userData.sort((a, b) =>
    sortData(
      a,
      b,
      sort,
      sortCriteria.filter((s) => s !== sort)
    )
  );
      console.log(userData)
  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      align="middle"
      style={{
        width: "100%",
        margin: 0,
        overflow: "auto",
        height: "80vh",
      }}
    >
      {!loading ? (
        userData.map((user) => (
          <Col span={8} key={user.id} style={{padding:'1rem', minHeight:0}}>
            <ProfileCard userData={user} />
          </Col>
        ))
      ) : (
        <Spin style={{ width: "20vw", margin: "15% auto" }} />
      )}
    </Row>
  );
}
export default CardGrid;
