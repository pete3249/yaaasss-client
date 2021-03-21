import { 
    START_LOADING_CREATED_EVENTS,
    SUCCESSFULLY_LOADED_CREATED_EVENTS,
    SUCCESSFULLY_CREATED_EVENT,
    
} from '../actions/index'

const initialState = {
    created: []
}

export default function eventReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_CREATED_EVENTS:
            return {...state, loadingState: 'inProgress'}
        case SUCCESSFULLY_LOADED_CREATED_EVENTS:
            return {
                ...state, 
                created: action.payload
            }
        case SUCCESSFULLY_CREATED_EVENT:
            return {
                ...state,
                created: state.created.concat(action.payload)}
        default:
            return state
    }
}