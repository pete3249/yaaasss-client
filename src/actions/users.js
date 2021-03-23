import { 
    START_LOADING_USERS,
    ADD_USERS,
    SUCCESSFULLY_LOADED_USERS
} from '.'

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
        .then(userJSON => {
            dispatch({
                type: ADD_USERS,
                payload: {
                    users: userJSON.users,
                    currentUser: userJSON.current_user
                }
            })
        })
        .then(() => {
            dispatch({type: SUCCESSFULLY_LOADED_USERS})
        })
    }
}