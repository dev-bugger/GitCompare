/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
    setUserProfileData,
    setLoading,
    handleError,
    setAlert,
    closeAlert
} from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { modify } from "../utils/modify";
const classes = {
    button: { marginRight: "1vw" },
    input: { width: "12rem" }
};

const Search = (props) => {
    const [input, setInput] = useState("");
    const userNames = useSelector((state) => state.userReducer.userNames);

    const ref = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const handleClick = () => {
        if (userNames.indexOf(input) === -1) {
            let query =
                userNames.length === 0
                    ? input
                    : `${userNames.join(",")},${input}`;
            history.replace(`?usernames=${query}`);
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
                let query = modify(history.location.search);
                query = query.filter((q) => q !== input);
                query =
                    query.length === 0 ? "" : `?usernames=${query.join(",")}`;
                history.replace(query);

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
        let query = history.location.search;
        if (!query.trim()) return;
        query = modify(query);
        const filteredQuery = query.filter((q) => userNames.indexOf(q) < 0);

        if (filteredQuery.length) {
            dispatch(setLoading(true));
            filteredQuery.forEach((q, i) => {
                getGitHubData(q, i === filteredQuery.length - 1);
            });
        }
    }, [history.location.search]);

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
                Compare
            </Button>
        </>
    );
};

export default Search;
