import React from 'react';

class EventIndexContainer extends React.Component {
    state = {
        events: [],
        loading: true
    }

    componentDidMount() {

    }

    render() {
        if(this.state.loading) {
            return <div>Hi there</div>
        }
        return <div>Inside Event Index Container</div>
    }
}

export default EventIndexContainer;