import { 
    START_LOADING_RESTAURANTS,
    ADD_RESTAURANTS,
    SUCCESSFULLY_LOADED_RESTAURANTS
} from '.'

export const fetchRestaurants = (categories, location) => {
    return (dispatch) => {
        dispatch({type: START_LOADING_RESTAURANTS})
        fetch(`http://localhost:3001/restaurant_search/?categories=${categories}&location=${location}`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(restaurantsJSON => {
            dispatch({
                type: ADD_RESTAURANTS,
                payload: restaurantsJSON.businesses
            })
        })
        .then(() => {
            dispatch({type: SUCCESSFULLY_LOADED_RESTAURANTS})
        })
    }
}
