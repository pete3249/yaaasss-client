import {
    START_LOADING_EVENTS,
    ADD_EVENTS,
    SUCCESSFULLY_LOADED_EVENTS,
    ADD_EVENT
} from '.'

export const fetchEvents = () => {
    return (dispatch) => {
        dispatch({type: START_LOADING_EVENTS})
        fetch('http://localhost:3001/events', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(eventsJson => {
            dispatch({
                type: ADD_EVENTS,
                payload: eventsJson
            });
        })
        .then(() => dispatch({type: SUCCESSFULLY_LOADED_EVENTS}))
    }
}

export const addEvent = event => {
    return (dispatch) => {
        dispatch({
            type: ADD_EVENT, 
            payload: event
        })
    }
}