import React from 'react';
import EventListItem from './EventListItem';

const CreatedEventList = ({events, handleDeleteEvent}) => {
    return (
        <div>
            <h1 className="text-gray-900 text-center text-3xl font-semibold pt-4 pb-4">My Events</h1>
            <div className="grid grid-cols-2 gap-4">
                {events.map(event => <EventListItem key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />)}
            </div>
        </div>
    )
}

export default CreatedEventList;