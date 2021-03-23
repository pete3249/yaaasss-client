import React from 'react';
import Moment from 'react-moment';

class InvitedEventListItem extends React.Component {

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
                    <p>Date: <Moment format="MMMM Do, YYYY">{e.start_time}</Moment></p> 
                    <p>Start: <Moment format="h:mm a">{e.start_time}</Moment></p> 
                    <p>End: <Moment format="h:mm a">{e.end_time}</Moment></p> 
                    <p>Invited: {e.invited_users ? (e.invited_users.map((user) => user.username).join(', ')) : ''}</p>
                    <p>Notes: {e.notes}</p>
                    <p className="uppercase">Hosted by: {e.event_creator.username}</p>
                </div>
            </div>
            <div className="flex justify-evenly mt-2">
                {e.attendees.find(user => user.id === this.props.currentUser)? 
                    (
                        <button 
                            className="bg-purple-500 text-white px-3 py-3 rounded rounded-md text-sm font-large hover:bg-gray-500 border my-3 mr-8"
                            name="going"
                            onClick={() => this.props.handleClick(e.attendees.find(user => user.id === this.props.currentUser).user_event, false)}
                        >
                            Cancel
                        </button>
                    )
                        :
                    (<div className="bg-white border-gray-200 text-right">
                        <button 
                            className="bg-gray-900 text-white px-3 py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3 mr-8"
                            name="going"
                            onClick={() => this.props.handleClick(e.invited_users.find(user => user.id === this.props.currentUser).user_event, true)}
                        >
                            Yaaasss!
                        </button>
                        <button 
                            className="bg-gray-900 text-white px-8 py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3"
                            name="going"
                            onClick={() => this.props.dispatchHandleClick(e.invited_users.filter(user => user.id === this.props.currentUser).user_event, false)}
                        >
                            No
                        </button>
                    </div>
                    )}
            </div>
            </div>
        </div>
        )
    }
}

export default InvitedEventListItem;