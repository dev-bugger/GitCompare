/* eslint-disable react-hooks/exhaustive-deps */
import { GithubOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
    closeAlert,
    handleError,
    setAlert,
    setLoading,
    setUserProfileData
} from "../actions";
import { modify } from "../utils/modify";
const classes = {
    button: {},
    input: { width: "30vw" }
};

const Search = (props) => {
    const [input, setInput] = useState("");
    const userNames = useSelector((state) => state.userReducer.userNames);

    const ref = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const generateURLAndSearch = (userNames) => {
        const params = new URLSearchParams();
        params.set("usernames", userNames);
        navigate(`?${params.toString()}`);
    };

    const handleClick = () => {
        if (userNames.indexOf(input) === -1) {
            let query =
                userNames.length === 0
                    ? input
                    : `${userNames.join(",")},${input}`;
            generateURLAndSearch(query);
        }
        setInput("");
        ref.current.focus();
    };
    const getGitHubData = async (input, i) => {
        await Axios.get(`https://api.github.com/users/${input}`)
            .then((response) => {
                dispatch(setUserProfileData(response.data, input));
            })
            .catch((_error) => {
                input = input.replace("%20", " ");
                let query = modify(location.search);
                query = query.filter((q) => q !== input);
                query = query.length === 0 ? "" : `${query.join(",")}`;
                generateURLAndSearch(query);

                dispatch(handleError(input));
                dispatch(
                    setAlert({
                        text: `Username ${input} DOES NOT EXSIT`,
                        type: "warning",
                        status: "error"
                    })
                );

                setTimeout(() => {
                    dispatch(closeAlert());
                }, 3000);
            });

        if (i) dispatch(setLoading(false));
    };

    useEffect(() => {
        let query = location.search;
        if (!query.trim()) return;
        query = modify(query);
        const filteredQuery = query.filter((q) => userNames.indexOf(q) < 0);

        if (filteredQuery.length) {
            dispatch(setLoading(true));
            filteredQuery.forEach((q, i) => {
                getGitHubData(q, i === filteredQuery.length - 1);
            });
        }
    }, [location.search]);

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <>
            <Input
                placeholder="Enter UserName"
                prefix={<UserOutlined className="site-form-item-icon" />}
                style={classes.input}
                value={input}
                onChange={handleChange}
                ref={ref}
                onPressEnter={handleClick}
                allowClear
            />

            <Button
                style={classes.button}
                disabled={!Boolean(input.trim())}
                onClick={handleClick}
            >
                <GithubOutlined style={{ color: "#4F407C" }} />
            </Button>
        </>
    );
};

export default Search;
