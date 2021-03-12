import React from 'react';
import RestaurantSearchForm from '../components/RestaurantSearchForm'

class RestaurantIndexContainer extends React.Component {
    state = {
        restaurants: [],
    }

    render() {
        return (
            <section className="max-w-6xl mx-auto mt-10"> 
                < RestaurantSearchForm />
            </section>
        )
    }
}

export default RestaurantIndexContainer;