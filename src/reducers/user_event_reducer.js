import { SUCCESSFULL_RSVP } from '../actions/index'

const initialState = {
    loadingState: 'notStarted'
}

export default function userEventReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESSFULL_RSVP:
            return {loadingState: 'successful'}
        default:
            return state
    }
}