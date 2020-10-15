export const sortType = {
    followers: "Followers",
    public_repos: "Public Repos",
    public_gists: "Public Gists",
    following: "Following"
};

export const sortData = (a, b, sort) => {
    const sortCriteria = Object.keys(sortType).filter((s) => s !== sort);
    if (a[sort] < b[sort]) return 1;
    else if (a[sort] === b[sort]) {
        if (a[sortCriteria[0]] < b[sortCriteria[0]]) return 1;
        else if (a[sortCriteria[1]] < b[sortCriteria[1]]) return 1;
        else if (a[sortCriteria[2]] < b[sortCriteria[2]]) return 1;
    }
    return -1;
};
