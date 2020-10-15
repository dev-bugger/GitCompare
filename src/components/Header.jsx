/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Typography, Space, Layout, Tooltip, Alert } from "antd";
import { UserOutlined, SyncOutlined, EyeOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import {
  getUserName,
  setUserProfileData,
  setLoading,
  handleError,
  handleAlert,
  handleReset,
} from "../actions";
import compareIcon from "../assests/compare.png";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const { Title } = Typography;
function Header(props) {
  const [input, setInput] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  let history = useHistory();
  const ref = useRef(null);
  const userNames = useSelector((state) => state.userNames);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    if (userNames.indexOf(input) === -1) {
      let query =
        userNames.length === 0 ? input : userNames.join(",") + "," + input;
      history.replace(`?usernames=${query}`);
    }
    setInput("");
    ref.current.focus();
  };

  const handleOnReset = () => {
    dispatch(handleReset());
    history.replace("");
  };

  const copyToClipboard = async () => {
    const link = window.location.href;
    await navigator.clipboard
      .writeText(link)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch(() => {
        setFailure(true);
        setTimeout(() => {
          setFailure(false);
        }, 2000);
      });
  };
  const getGitHubData = async (input, i) => {
    await Axios.get(`https://api.github.com/users/${input}`)
      .then((response) => {
        dispatch(setUserProfileData(response.data));
      })
      .catch((error) => {
        input = input.replace("%20", " ");
        dispatch(handleError(input));

        let query = history.location.search;
        query = query.replace("?usernames=", "");
        query = query.split(",");
        query = query.filter((q) => q !== input);
        query.length === 0
          ? history.replace("")
          : history.replace(`?usernames=${query.join(",")}`);

        setTimeout(() => {
          dispatch(handleAlert(false));
        }, 3000);
      });

    if (i) dispatch(setLoading(false));
  };

  useEffect(() => {
    let query = history.location.search;

    if (!query.trim()) return;
    query = query.replace("?usernames=", "");
    query = query.split(",");
    dispatch(setLoading(true));
    dispatch(getUserName(query));
    query.forEach((q, i) => {
      getGitHubData(q, i === query.length - 1);
    });
  }, [history.location.search]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Layout.Header
      style={{
        position: "fixed",
        width: "100vw",
        height: "15vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1vh 2vw",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Space>
          <Avatar src={compareIcon} style={{ height: "3rem", width: "3rem" }} />
          <Typography>
            <Title style={{ color: "white", fontSize: "2rem", margin: 0 }}>
              GitHub Compare
            </Title>
          </Typography>
        </Space>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Input
          placeholder="Enter UserName"
          prefix={<UserOutlined className="site-form-item-icon" />}
          style={{ width: "15vw" }}
          value={input}
          onChange={handleChange}
          ref={ref}
          onPressEnter={handleClick}
          allowClear
        />

        <Button
          style={{ marginRight: "0.5rem" }}
          disabled={!Boolean(input.trim())}
          onClick={handleClick}
        >
          Compare
        </Button>
        <Button
          shape="circle"
          onClick={handleOnReset}
          style={{ marginRight: "0.5rem" }}
        >
          <Tooltip title="RESET">
            <SyncOutlined />
          </Tooltip>
        </Button>

        <Button shape="circle" onClick={copyToClipboard}>
          <Tooltip title="Get Shareable Link">
            <EyeOutlined />
          </Tooltip>
        </Button>
      </div>
      {success && (
        <Alert
          message="Successfully Copied"
          type="success"
          closable
          onClose={() => setSuccess(false)}
          style={{ position: "fixed", top: "18vh", right: "1rem" }}
        />
      )}
      {failure && (
        <Alert
          message="Unsuccessful Copy"
          type="error"
          closable
          onClose={() => setFailure(false)}
          style={{ position: "fixed", top: "18vh", right: "1rem" }}
        />
      )}
    </Layout.Header>
  );
}

export default Header;
