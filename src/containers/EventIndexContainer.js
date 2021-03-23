import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, deleteEvent } from '../actions/event';
import { fetchUsers } from '../actions/users';
import CreatedEventList from '../components/CreatedEventList';

class EventIndexContainer extends React.Component {
    componentDidMount() { 
        this.props.dispatchFetchEvents();
        this.props.dispatchFetchUsers();
    }

    render() {
        return (
            <div>
                {this.props.createdEvents.length > 0 ? (< CreatedEventList events={this.props.createdEvents} handleDeleteEvent={this.props.dispatchHandleDeleteEvent} />) : (<p className="text-gray-900 text-center text-3xl font-semibold pt-6 pb-6">No created events yet!</p>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        createdEvents: state.events.createdEvents
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchEvents: () => dispatch(fetchEvents()),
        dispatchFetchUsers: () => dispatch(fetchUsers()),
        dispatchHandleDeleteEvent: eventId => dispatch(deleteEvent(eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndexContainer);