import React from 'react';
import EventListItem from './EventListItem';

const CreatedEventList = ({events, handleDeleteEvent}) => {
    return (
        <div>
            <h1 className="text-gray-900 text-center text-3xl font-semibold pt-6 pb-6">My Events</h1>
            <div className="grid grid-cols-3 gap-4">
                {events.map(event => <EventListItem key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />)}
            </div>
        </div>
    )
}

export default CreatedEventList;