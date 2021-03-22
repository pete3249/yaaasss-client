import { 
    START_LOADING_USERS,
    ADD_USERS,
    SUCCESSFULLY_LOADED_USERS,
    ADD_CURRENT_USER
} from '.'

export const fetchCurrentUser = () => {
    return (dispatch) => {
        dispatch({type: START_LOADING_USERS})
        fetch('http://localhost:3001/users', {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(userJSON => {
            dispatch({
                type: ADD_CURRENT_USER,
                payload: userJSON.current_user.id
            })
        })
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: START_LOADING_USERS})
        fetch('http://localhost:3001/users', {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(usersJSON => {
            dispatch({
                type: ADD_USERS,
                payload: usersJSON.users
            })
        })
        .then(() => {
            dispatch({type: SUCCESSFULLY_LOADED_USERS})
        })
    }
}