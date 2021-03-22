import { 
    START_LOADING_EVENTS,
    ADD_EVENTS,
    SUCCESSFULLY_LOADED_EVENTS,
    ADD_EVENT,
    DELETE_EVENT,
    ADD_INVITED_EVENTS
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
                createdEvents: action.payload,
                loadingState: 'successful'
            }
        case SUCCESSFULLY_LOADED_EVENTS:
            return {
                ...state,
                loadingState: 'complete'
            }
        case ADD_EVENT:
            const foundEvent = state.createdEvents.find(event => event.id === action.payload.id)
            if (foundEvent) {
                return state
            } else {
                return {
                    ...state,
                    createdEvents: state.createdEvents.concat(action.payload)
                }
            }
        case ADD_INVITED_EVENTS:
            return {
                ...state,
                invitedEvents: action.payload,
                loadingState: 'successful'
            }
        case DELETE_EVENT:
            const createdEvents = state.createdEvents.filter(event => event.id !== action.payload)
            return {
                ...state,
                createdEvents: createdEvents
            }
        default:
            return state
    }
}

