import React from 'react';

class RestaurantSearchForm extends React.Component {
    state = {
        categories: '',
        location: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleOnSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:3001/restaurant_search/?categories=${this.state.categories}&location=${this.state.location}`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(restaurants => {
            return this.props.addRestaurants(restaurants.businesses) 
        })
        this.setState({
            categories: '',
            location: ''
        })
    } 
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <h1 className="text-center text-3xl font-semibold mb-2">Find a Local Restaurant</h1>
                    <fieldset>
                        <input
                            type="text"
                            name="categories"
                            onChange={this.handleChange}
                            value={this.state.categories}
                            placeholder="Choose a category"
                            className="w-full border p-4 my-4"
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            type="text"
                            name="location"
                            onChange={this.handleChange}
                            value={this.state.location}
                            placeholder="Enter a zip code"
                            className="w-full border p-4 my-4"
                        />
                    </fieldset>
                    <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default RestaurantSearchForm;
