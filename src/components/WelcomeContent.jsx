import React from "react";
import { Divider, Typography } from "antd";
import logo from "../assests/logo.png";
function WelcomeContent(props) {
  return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ width: "20vw" }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "4rem", width: "4rem", margin: "2rem" }}
            />
          </div>
          <Divider
            type="vertical"
            style={{
              height: "80vh",
              margin: 0,
              borderLeft: "0.1rem solid rgba(0, 0, 0, 0.06)",
            }}
          />
          <div
            style={{
              width: "100%",
            }}
          >
            <Typography>
              <Typography.Title
                style={{
                  color: "#001529",
                  fontSize: "2rem",
                  margin: 0,
                }}
              >
                Let's get started...
              </Typography.Title>
            </Typography>
          </div>
        </div>
  );
}
export default WelcomeContent;
