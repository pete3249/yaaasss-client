import React from 'react';
import RestaurantSearchForm from '../components/RestaurantSearchForm';
import RestaurantList from '../components/RestaurantList';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/restaurants';

class RestaurantIndexContainer extends React.Component {
    render() {
        return (
            <section className="max-w-6xl mx-auto mt-8"> 
                < RestaurantSearchForm fetchRestaurants={this.props.fetchRestaurants}/>
                {this.props.loadingState === 'successful' ? (<RestaurantList restaurants={this.props.restaurants}/>) : ('')}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants.list,
        loadingState: state.restaurants.loadingState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: (categories, location) => dispatch(fetchRestaurants(categories, location))
    }
} 
    
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndexContainer);