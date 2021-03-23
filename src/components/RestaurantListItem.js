import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantListItem extends React.Component {

    render() {
        let r = this.props.restaurant
        return (
            <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-200 rounded-lg bg-white my-12 mx-8 max-w-2xl mx-auto mt-10">
                <img src={r.image_url} alt={r.alias} className="object-scale-down h-64 w-full overflow-hidden"></img>
                <div className="p-2">
                    <h3 className="text-center font-medium text-gray-600 text-lg my-2 uppercase underline">{r.name}</h3>
                    <ul className="text-justify px-4">
                        {r.categories.map(category => <li key={category.alias} className="list-disc list-inside">{category.title}</li>)}
                        <li>Rating: {r.rating}</li>
                        <li>Price: {r.price}</li>
                        <li>Address: {r.location.address1}</li>
                    </ul>
                    <div className="flex justify-evenly mt-5">
                        <a href={r.url} className="bg-gray-900 text-white px-3 py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3">Learn more</a>
                        <Link to={{
                            pathname:"/events/new",
                            state: {restaurant: r}
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