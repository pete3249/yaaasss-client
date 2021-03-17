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
        this.props.fetchRestaurants(this.state.categories, this.state.location);
        this.setState({
            categories: '',
            location: ''
        })
    }
    
    render() {
        return (
            <div>
                <h1 className="text-gray-900 text-center text-3xl font-semibold">Find your perfect hangout</h1>
                <form onSubmit={this.handleOnSubmit} className="max-w-lg mx-auto w-3/4 mt-2">
                    <fieldset>
                        <input
                            type="text"
                            name="categories"
                            onChange={this.handleChange}
                            value={this.state.categories}
                            placeholder="Category"
                            className="mx-auto w-8/12 border p-3 my-3 block"
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            type="text"
                            name="location"
                            onChange={this.handleChange}
                            value={this.state.location}
                            placeholder="Enter a zip code"
                            className="mx-auto w-8/12 border p-3 my-3 block"
                        />
                    </fieldset>
                    <fieldset>
                        <button className="block mx-auto w-8/12 bg-gray-900 text-white px-3 py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3" type="submit">Search</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default RestaurantSearchForm;
