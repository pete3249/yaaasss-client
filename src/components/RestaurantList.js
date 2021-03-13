import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({restaurants}) => {
    return (
        <ul>
          {restaurants.map(restaurant => <RestaurantListItem key={restaurant.id} restaurant={restaurant}/>)}
        </ul>
    );
};
  
export default RestaurantList;
