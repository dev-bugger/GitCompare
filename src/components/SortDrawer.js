import React, { useState } from "react";
import { Drawer } from "antd";
import { Button } from "antd";
import sort from "../assests/sort.png";
import { CloseOutlined } from "@ant-design/icons";

const classes = {
    btn: {
        position: "fixed",
        top: "12vh",
        right: "2vw",
        height: "fit-content",
        background: "#836bba7e",
        zIndex: 1
    },
    img: { width: "1rem", height: "1rem" },
    titleRoot: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        flexGrow: 1,
        marginLeft: "2vw",
        color: "#ffffff"
    },
    drawer: {
        //
    },
    icon: { color: "white", fontSize: "1rem" }
};
const Title = ({ onClose }) => (
    <div style={classes.titleRoot}>
        <CloseOutlined style={classes.icon} onClick={onClose} />
        <span style={classes.title}>Sort it out, HERE!</span>
    </div>
);
const SortDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                shape="round"
                style={classes.btn}
                onClick={() => setOpen(true)}
            >
                <img src={sort} alt="sort" style={classes.img} />
            </Button>
            <Drawer
                className="drawer"
                title={<Title onClose={() => setOpen(false)} />}
                placement="left"
                closable={false}
                onClose={() => setOpen(false)}
                visible={open}
                getContainer={false}
                style={{ position: "absolute" }}
            >
                {children}
            </Drawer>
        </>
    );
};

export default SortDrawer;
