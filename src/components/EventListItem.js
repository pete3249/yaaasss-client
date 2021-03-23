import React from 'react';
import Moment from 'react-moment';

class EventListItem extends React.Component {
    render() {
        const e = this.props.event
        return (
        <div className="p-2 text-gray-900 max-w-2xl max-w-lg w-96 mx-auto sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-lg">
                <div className="h-18 text-center px-6 py-6 bg-white border-b border-gray-200 font-bold uppercase bg-purple-200">
                    {e.name}
                </div>

            <div className="bg-gray-200 p-4 bg-white border-b border-gray-200">
                <p className="text-center font-semibold pb-2">{e.location}</p>
                <div>
                    <p>Address: {e.address}</p>
                    <p>Date: <Moment format="MMMM Do YYYY">{e.start_time}</Moment></p> 
                    <p>Start: <Moment format="h:mm a">{e.start_time}</Moment></p> 
                    <p>End: <Moment format="h:mm a">{e.end_time}</Moment></p> 
                    <p>Invited: {e.invited_users.map((user) => user.username).join(', ')}</p>
                    <p>Attending: {e.attendees.length !== 0 ? `${e.attendees.map((attendee) => attendee.username).join(', ')}` : 'None'}</p>
                    <p>Notes: {e.notes}</p>
                </div>   
            </div>

            <div className="bg-white border-gray-200 text-right">
                <button 
                    className="block mx-auto w-8/12 bg-gray-900 text-white py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3"
                    onClick={() => this.props.handleDeleteEvent(e.id)}
                > 
                    Delete Event
                </button> 
            </div>
            </div>
        </div>
        )
    }
}

export default EventListItem;