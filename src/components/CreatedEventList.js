import React from 'react';
import EventListItem from './EventListItem';

const CreatedEventList = ({events}) => {
    return (
        <div>
            <h1 className="text-gray-900 text-center text-3xl font-semibold pt-4">My Events</h1>
          {events.map(event => <EventListItem key={event.id} event={event} />)}
        </div>
    )
}

export default CreatedEventList;