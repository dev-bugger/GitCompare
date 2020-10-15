import React from "react";
import { Timeline, Dropdown, Menu, Spin, Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ThunderboltOutlined } from "@ant-design/icons";
import { setSort } from "../actions";
import { sortData } from "../utils/sort";
function TimelineDiv(props) {
    const sortCriteria = [
        "followers",
        "public_repos",
        "public_gists",
        "following"
    ];

    const loading = useSelector((state) => state.userReducer.loading);
    const sort = useSelector((state) => state.timelineReducer.sort);
    let userData = useSelector((state) => state.userReducer.userData);
    userData = userData.sort((a, b) =>
        sortData(
            a,
            b,
            sort,
            sortCriteria.filter((s) => s !== sort)
        )
    );

    const dispatch = useDispatch();
    const handleSort = (event) => {
        dispatch(setSort(event.key));
    };
    const menu = (
        <Menu onClick={handleSort}>
            <Menu.Item key="followers">Followers</Menu.Item>
            <Menu.Item key="public_repos">Public Repos</Menu.Item>
            <Menu.Item key="public_gists">Public Gists</Menu.Item>
            <Menu.Item key="following">Following</Menu.Item>
        </Menu>
    );

    const timeline = {
        followers: "Followers",
        public_repos: "Public Repos",
        public_gists: "Public Gists",
        following: "Following"
    };
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column"
            }}
        >
            {(loading || userData.length !== 0) && (
                <Dropdown.Button
                    overlay={menu}
                    icon={<ThunderboltOutlined />}
                    disabled={userData.length < 2}
                >
                    Sort by {sort}
                </Dropdown.Button>
            )}

            {loading && <Spin style={{ width: "20vw", margin: "15% auto" }} />}

            {!loading && userData.length !== 0 && (
                <>
                    <Timeline
                        style={{
                            width: "20vw",
                            paddingTop: "5vh",
                            paddingLeft: "5vw",
                            height: "80vh",
                            overflowY: "auto"
                        }}
                        mode="left"
                    >
                        {userData.map((user) => (
                            <Tooltip
                                title={`${timeline[sort]}: ${user[sort]}`}
                                placement="top"
                                key={Math.random() * 1000}
                            >
                                <Timeline.Item className="item" color="#001529">
                                    {user.login}
                                </Timeline.Item>
                            </Tooltip>
                        ))}
                    </Timeline>
                </>
            )}
        </div>
    );
}

export default TimelineDiv;
