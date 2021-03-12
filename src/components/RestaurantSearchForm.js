import React from 'react';

class RestaurantSearchForm extends React.Component {
    render() {
        return (
            <div> Search For Restaurants!
                <form>
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default RestaurantSearchForm;