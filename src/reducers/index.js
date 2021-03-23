import { combineReducers } from 'redux';
import restaurantReducer from './restaurant_reducer';
import userReducer from './user_reducer';
import eventReducer from './event_reducer';
import userEventReducer from './user_event_reducer';

export default combineReducers({
    restaurants: restaurantReducer,
    users: userReducer,
    events: eventReducer,
    userEvents: userEventReducer
});