import { 
    START_LOADING_EVENTS,
    ADD_EVENTS,
    SUCCESSFULLY_LOADED_EVENTS
} from '../actions/index';

const initialState = {
    loadingState: 'notStarted',
    createdEvents: [],
    invitedEvents: []
}

export default function EventReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_EVENTS:
            return {...state, loadingState: 'inProgress'}
        case ADD_EVENTS:
            return {
                ...state, 
                createdEvents: action.payload.created_events,
                invitedEvents: action.payload.invited_events,
                loadingState: 'successful'
            }
        case SUCCESSFULLY_LOADED_EVENTS:
            return {
                ...state,
                loadingState: 'complete'
            }
        default:
            return state
    }
}

