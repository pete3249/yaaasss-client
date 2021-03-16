import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantListItem extends React.Component {
    state = {
        restaurant: this.props.restaurant
    }
    
    render() {
        return (
            <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-200 rounded-lg bg-white my-12 mx-8 max-w-2xl mx-auto mt-10">
                <img src={this.state.restaurant.image_url} alt={this.state.restaurant.alias} className="object-scale-down h-64 w-full overflow-hidden"></img>
                <div className="p-2">
                    <h3 className="text-center font-medium text-gray-600 text-lg my-2 uppercase underline">{this.state.restaurant.name}</h3>
                    <ul className="text-justify px-4">
                        {this.state.restaurant.categories.map(category => <li key={category.alias} className="list-disc list-inside">{category.title}</li>)}
                        <li>Rating: {this.state.restaurant.rating}</li>
                        <li>Price: {this.state.restaurant.price}</li>
                        <li>Address: {this.state.restaurant.location.address1}</li>
                    </ul>
                    <div className="flex justify-evenly mt-5">
                        <a href={this.state.restaurant.url} className="bg-gray-900 text-white px-3 py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3">Learn more</a>
                        <Link to={{
                            pathname:"/events/new",
                            state: {restaurant: this.state.restaurant}
                        }}
                        className="btn btn-primary bg-gray-900 text-white px-3 py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3"
                        >
                            Create event
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantListItem;