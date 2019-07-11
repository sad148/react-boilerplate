const searchUsers = (state = {users : [1, 2,3], fetchingUser : false}, action) => {
    console.log("inside searchusers");
    switch(action.type) {
        case 'FETCHED_USERS':
            state ={
                ...state, 
                users: action.payload,
                fetchingUser: false
            }
            break;
        case 'FETCHING_USERS':
            state={
                ...state,
                fetchingUser: true,
                users: []
            }
            break;
    }
    return state;
}

export default searchUsers;