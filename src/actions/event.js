import {
    START_LOADING_EVENTS,
    ADD_EVENTS,
    SUCCESSFULLY_LOADED_EVENTS,
    ADD_EVENT,
    DELETE_EVENT,
    ADD_INVITED_EVENTS
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
                payload: eventsJson.created_events
            });
        })
        .then(() => dispatch({type: SUCCESSFULLY_LOADED_EVENTS}))
    }
}

export const dispatchFetchInvitedEvents = () => {
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
                type: ADD_INVITED_EVENTS,
                payload: eventsJson.invited_events,
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

export const deleteEvent = eventId => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
        .then(res => {
            if (res.ok) {
                dispatch({
                    type: DELETE_EVENT,
                    payload: eventId
                })
            } else {
              console.log(res)
            }
        })
    }
}