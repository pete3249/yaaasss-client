import React from 'react';
import RestaurantSearchForm from '../components/RestaurantSearchForm';
import RestaurantList from '../components/RestaurantList';
import { connect } from 'react-redux';

class RestaurantIndexContainer extends React.Component {
    render() {
        return (
            <section className="max-w-6xl mx-auto mt-10"> 
                < RestaurantSearchForm addRestaurants={this.props.addRestaurants}/>
                {this.props.restaurants.length > 0 ? <RestaurantList restaurants={this.props.restaurants}/>: ''}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRestaurants: restaurants => dispatch({type: "ADD_RESTAURAUNTS", restaurants})
    }
} 
    
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndexContainer);