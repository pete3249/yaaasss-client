import { 
    ADD_RESTAURANTS, 
    START_LOADING_RESTAURANTS, 
    SUCCESSFULLY_LOADED_RESTAURANTS
} from '../actions/index'

const initialState = {
    loadingState: 'notStarted',
    list: []
}

export default function RestaurantReducer(state = initialState, action) {
    switch (action.type) {
    case START_LOADING_RESTAURANTS:
        return {...state, loadingState: 'inProgress'};
    case ADD_RESTAURANTS:
        return {...state, list: action.payload}
    case SUCCESSFULLY_LOADED_RESTAURANTS:
        return {...state, loadingState: 'successful'}
    default:   
        return state
    }
}