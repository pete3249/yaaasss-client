import React from 'react';
import { connect } from 'react-redux';
import { fetchInvitedEvents } from '../actions/event';
import { handleClick } from '../actions/userEvents';
import { fetchUsers } from '../actions/users';
import InvitedEventList from '../components/InvitedEventList';

class InvitedEventContainer extends React.Component {
    componentDidMount() { 
        this.props.dispatchFetchUsers();
        this.props.dispatchFetchInvitedEvents();
    }

    handleClick = (userEventId, response) => {
        this.props.dispatchHandleClick(userEventId, response);
        window.location.reload(false);
    }
    
    render() {
        return (
            <div>
                {this.props.invitedEvents.length > 0 ? (< InvitedEventList events={this.props.invitedEvents} currentUser={this.props.currentUser} handleClick={this.handleClick}/>): ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        invitedEvents: state.events.invitedEvents,
        currentUser: state.users.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchUsers: () => dispatch(fetchUsers()),
        dispatchFetchInvitedEvents: () => dispatch(fetchInvitedEvents()),
        dispatchHandleClick: (userEventId, response) => dispatch(handleClick(userEventId, response))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvitedEventContainer);