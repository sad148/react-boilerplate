const searchUsers = (state = {users : [], fetchingUser : false}, action) => {
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