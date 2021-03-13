function restaurantReducer(state = {
    restaurants: []
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURAUNTS':
            return {
                ...state,
                restaurants: [...action.restaurants]
            }
        default:
            return state  
    }
}

export default restaurantReducer;