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
            return <div>Loading spinner</div>
        }
        return <div>Inside Event Index Container</div>
    }
}

export default EventIndexContainer;