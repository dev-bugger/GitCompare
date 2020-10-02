import React from "react";
import { useSelector } from "react-redux";
import { Skeleton, Card, Avatar, Divider, Tooltip } from "antd";
const { Meta } = Card;

function ProfileCard(props) {
  const loading = useSelector((state) => state.loading);
  const {
    login,
    name,
    avatar_url,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = props.userData;
  let strBio = bio === null || bio.length === 0 ? "..." : bio;
  return (
    <>
      <Card>
        <Skeleton loading={loading} avatar active paragraph={{ rows: 4 }}>
          <Meta
            avatar={<Avatar src={avatar_url} />}
            title={
              <Tooltip placement="leftTop" title={`${name} | ${login}`}>
                {`${name} | ${login}`}
              </Tooltip>
            }
            description={
              <Tooltip placement="leftTop" title={bio}>
                {strBio}
              </Tooltip>
            }
          />
          <Divider />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <span>Followers: {followers}</span>
            <span>Following: {following}</span>
          </div>
          <Divider />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <span>Public Repos: {public_repos}</span>
            <span>Public Gists: {public_gists}</span>
          </div>
        </Skeleton>
      </Card>
    </>
  );
}

export default ProfileCard;
