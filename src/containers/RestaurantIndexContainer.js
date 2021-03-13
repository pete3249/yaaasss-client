import React from 'react';
import RestaurantSearchForm from '../components/RestaurantSearchForm';
import { connect } from 'react-redux';

class RestaurantIndexContainer extends React.Component {
    state = {
        restaurants: [],
    }

    render() {
        return (
            <section className="max-w-6xl mx-auto mt-10"> 
                < RestaurantSearchForm addRestaurants={this.props.addRestaurants}/>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRestaurants: restaurants => dispatch({type: "ADD_RESTAURAUNTS", restaurants})
    }
} 
    
export default connect(null, mapDispatchToProps)(RestaurantIndexContainer);