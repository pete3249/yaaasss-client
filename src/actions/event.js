import { SUCCESSFULLY_CREATED_EVENT} from '.'

export const createEvent = (eventData) => {
    return (dispatch) => {
        fetch('http://localhost:3001/events', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({event: eventData})
        })
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                return res.json().then(errors => Promise.reject(errors))
            }
        })
        .then(eventJson => {
            dispatch({
                type: SUCCESSFULLY_CREATED_EVENT,
                payload: eventJson
            });
        })
    }
}




