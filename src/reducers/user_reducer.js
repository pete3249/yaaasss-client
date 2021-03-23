import { 
    START_LOADING_USERS, 
    ADD_USERS, 
    SUCCESSFULLY_LOADED_USERS
} from '../actions/index'

const initialState = {
    loadingState: 'notStarted',
    list: [],
    currentUser: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_USERS:
            return {...state, loadingState: 'inProgress'}
        case ADD_USERS:
            return {...state, list: action.payload.users, currentUser: action.payload.currentUser}
        case SUCCESSFULLY_LOADED_USERS:
            return {...state, loadingState: 'successful'}
        default:
             return state   
    }
}

