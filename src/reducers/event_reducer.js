import { 
    SUCCESSFULLY_CREATED_EVENT
} from '../actions/index'

const initialState = {
    created_events: []
}

export default function eventReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESSFULLY_CREATED_EVENT:
            return {...state, created_events: state.created_events.concat(action.payload)}
        default:
            return state
    }
}