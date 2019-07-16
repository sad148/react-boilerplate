const axios = require('axios');

function searchUsers(name) {
    return (dispatch) => {
    axios.get("https://api.github.com/search/users?q=" + name)
    .then((response) => {
        dispatch({type: "FETCHED_USERS", payload: response});
        console.log(response)
    })
    .catch((err) => {
        console.log(err);
    })
}
}

export default searchUsers;