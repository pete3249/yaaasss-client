import { combineReducers } from 'redux';
import restaurantReducer from './restaurant_reducer';
import userReducer from './user_reducer';

export default combineReducers({
    restaurants: restaurantReducer,
    users: userReducer
});