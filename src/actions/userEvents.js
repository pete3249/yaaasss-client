import { SUCCESSFULL_RSVP } from '.'

export const handleClick = (userEventId, response) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/user_events/${userEventId}`, {
            method: 'PATCH',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_event: {
                    going: response
                }
            })
        })
        .then(res => res.json())
        .then((resJSON) => {
            dispatch({type: SUCCESSFULL_RSVP})
        })
    }
}
