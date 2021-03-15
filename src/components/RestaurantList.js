import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({restaurants}) => {
    return (
      <div className="grid grid-cols-2 gap-2">
          {restaurants.map(restaurant => <RestaurantListItem key={restaurant.id} restaurant={restaurant}/>)}
      </div>
    );
};
  
export default RestaurantList;
