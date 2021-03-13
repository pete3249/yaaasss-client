import React from 'react';

const RestaurantListItem = ({ restaurant }) => {
    return <li className="" key={restaurant.id}>{restaurant.name}</li>
}

export default RestaurantListItem;