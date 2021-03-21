import React from 'react';
import Checkbox from '../components/Checkbox';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/users';

class NewEventContainer extends React.Component {
    state = {
        name: '',
        start_time: '',
        end_time: '',
        location: this.props.location.state.restaurant.name,
        address: this.props.location.state.restaurant.location.address1,
        notes: '',
        invited_user_ids: []
    }

    componentDidMount() { 
        this.props.fetchUsers();
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleFriendChange = userId => {
        if(this.state.invited_user_ids.some(friend => friend === userId)) {
            this.setState({
                ...this.state, 
                invited_user_ids: this.state.invited_user_ids.filter(friend => friend !== userId)
            })   
        } else {
            this.setState({
                ...this.state, 
                invited_user_ids: this.state.invited_user_ids.concat(userId)
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.createEvent(this.state);
    }

    createEvent = (eventData) => {
        fetch('http://localhost:3001/events', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({event: eventData})
        })
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                return res.json().then(errors => Promise.reject(errors))
            }
        })
        .then(eventJson => {
            this.props.history.push('/');
        })
        .catch((errors) => {
            console.log(errors)
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-gray-900 text-center text-3xl font-semibold pt-6">Create event</h1>
                <form onSubmit={this.handleSubmit} className="text-gray-900 max-w-lg mx-auto w-3/4 mt-2">
                    <fieldset>
                        <label htmlFor="name" className="block">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full border-2 p-3 my-3"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="name" className="block">
                            Start Time
                        </label>
                        <input
                            type="datetime-local"
                            name="start_time"
                            id="start_time"
                            className="w-full border-2 p-3 my-3"
                            onChange={this.handleChange}
                            value={this.state.start_time}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="name" className="block">
                            End Time
                        </label>
                        <input
                            type="datetime-local"
                            name="end_time"
                            id="end_time"
                            className="w-full border-2 p-3 my-3"
                            onChange={this.handleChange}
                            value={this.state.end_time}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="name" className="block">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            className="w-full border-2 p-3 my-3"
                            onChange={this.handleChange}
                            value={this.state.location}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="name" className="block">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            className="w-full border-2 p-3 my-3"
                            onChange={this.handleChange}
                            value={this.state.address}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="name" className="block">
                            Notes
                        </label>
                        <input
                            type="text"
                            name="notes"
                            id="notes"
                            className="w-full border-2 p-3 my-3"
                            onChange={this.handleChange}
                            value={this.state.notes}
                        />
                    </fieldset>
                    <fieldset className="block pb-4">
                        <label htmlFor="invited_user_ids" >Invite Friends</label>
                        <>
                        {this.props.users.map(user => <Checkbox key={user.id} user={user} handleFriendChange={(id) => this.handleFriendChange(id)}/>)}
                    </>
                    </fieldset>
                    <button
                        type="submit"
                        className="block mx-auto w-8/12 bg-gray-900 text-white px-3 py-3 rounded rounded-md text-sm font-large hover:bg-purple-500 border my-3"
                    >
                        Add Event
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEventContainer);