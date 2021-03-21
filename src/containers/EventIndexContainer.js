import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/event';
import CreatedEventList from '../components/CreatedEventList'

class EventIndexContainer extends React.Component {
    componentDidMount() { 
        if(this.props.loadingState === 'notStarted') {
            this.props.fetchEvents();
        }
    }

    render() {
        return (
            <div>
                {this.props.createdEvents.length > 0 ? (< CreatedEventList events={this.props.createdEvents} />) : ''}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loadingState: state.events.loadingState,
        createdEvents: state.events.createdEvents,
        invitedEvents: state.events.invitedEvents
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndexContainer);