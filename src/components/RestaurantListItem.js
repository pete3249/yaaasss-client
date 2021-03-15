import React from 'react';

const RestaurantListItem = ({restaurant}) => {
    return (
        <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-yellow-200 rounded-lg bg-white my-12 mx-8 max-w-2xl mx-auto mt-10">
            <img src={restaurant.image_url} alt={restaurant.alias} className="object-scale-down h-64 w-full overflow-hidden pt-2"></img>
            <div className="p-4">
                <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">{restaurant.name}</h3>
                <ul className="text-justify">
                    {restaurant.categories.map(category => <li className="list-disc list-inside">{category.title}</li>)}
                    <li>Rating: {restaurant.rating}</li>
                    <li>Price: {restaurant.price}</li>
                    <li>Address: {restaurant.location.address1}</li>
                </ul>
                <div className="mt-5">
                    <a href={restaurant.url} className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default RestaurantListItem;