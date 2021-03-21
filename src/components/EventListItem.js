import React from 'react';

class EventListItem extends React.Component {
    render() {
        return <div>{this.props.event.name}</div>
    }
}

export default EventListItem;