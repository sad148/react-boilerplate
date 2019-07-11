const axios = require('axios');

function searchUsers(name: string) {
    return (dispatch) => {
    axios.get("https://api.github.com/search/users?q=" + name)
    .then((response: JSON) => {
        dispatch({type: "FETCHED_USERS", payload: response});
        console.log(response)
    })
    .catch((err: any) => {
        console.log(err);
    })
}
}

export default searchUsers;