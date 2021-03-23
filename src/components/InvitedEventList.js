import React from 'react';
import InvitedEventListItem from './InvitedEventListItem';

const InvitedEventList = ({events, currentUser, handleClick}) => {
    return (
        <div>
            <h1 className="text-gray-900 text-center text-3xl font-semibold pt-6 pb-6">Event Invites</h1>
            <div className="grid grid-cols-3 gap-4">
                {events.length !== 0 ? events.map(event => <InvitedEventListItem key={event.id} event={event} currentUser={currentUser} handleClick={handleClick}/>): ''}
            </div>
        </div>
    )
}

export default InvitedEventList;