export const modify = (data) => {
    let query = data;
    query = query.replace("?usernames=", "");
    query = query.split(",");
    return query;
};
