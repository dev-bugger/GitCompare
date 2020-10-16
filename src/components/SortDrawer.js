import React from "react";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../actions";

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
        marginLeft: "3rem",
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
    // const [open, setOpen] = useState(false);
    const open = useSelector((state) => state.timelineReducer.open);
    const dispatch = useDispatch();
    return (
        <>
            <Drawer
                className="drawer"
                title={<Title onClose={() => dispatch(toggleDrawer(false))} />}
                placement="left"
                closable={false}
                onClose={() => dispatch(toggleDrawer(false))}
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
