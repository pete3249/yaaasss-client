import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({restaurants}) => {
    return (
      <div className="grid grid-cols-3 gap-4">
          {restaurants.map(restaurant => <RestaurantListItem key={restaurant.id} restaurant={restaurant}/>)}
      </div>
    );
};
  
export default RestaurantList;
