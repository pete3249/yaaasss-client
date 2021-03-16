import React from 'react';

class NewEventContainer extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const body = new FormData();
        body.append("event[name]", form.name.value);
        body.append("event[start_time]", form.start_time.value);
        body.append("event[end_time]", form.end_time.value);
        body.append("event[location]", form.location.value);
        body.append("event[address]", form.address.value);
        body.append("event[notes]", form.notes.value);
        body.append("event[event_creator_id]", 1);
        
        fetch("http://localhost:3001/events", {
            method: "post",
            body
        })
        .then(res => res.json())
        .then(eventJSON => {
            console.log(eventJSON);
        })
    }

    render() {
        return (
        <div>
            <h1 className="text-gray-900 text-center text-3xl font-semibold pt-6">Create event</h1>
            <form onSubmit={this.handleSubmit} className="text-gray-900 max-w-lg mx-auto w-3/4 mt-2">
                <fieldset className="">
                    <label htmlFor="name" className="block">
                        Event Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full border-2 p-3 my-3"
                    />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="start_time" className="block">
                        Start Time
                    </label>
                    <input
                        type="datetime-local"
                        name="start_time"
                        id="start_time"
                        className="w-full border-2 p-3 my-3"
                    />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="end_time" className="block">
                        End Time
                    </label>
                    <input
                        type="datetime-local"
                        name="end_time"
                        id="end_time"
                        className="w-full border-2 p-3 my-3"
                    />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="location" className="block">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        readOnly value={this.props.location.state.restaurant.name}
                        className="w-full border-2 p-3 my-3"
                    />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="name" className="block">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        readOnly value={this.props.location.state.restaurant.location.address1}
                        className="w-full border-2 p-3 my-3"
                    />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="notes" className="block">
                        Notes
                    </label>
                    <input
                        type="text"
                        name="notes"
                        id="notes"
                        className="w-full border-2 p-3 my-3"
                    />
                </fieldset>
                <fieldset className="">
                    <label htmlFor="notes" className="block">
                        Invite Friends
                    </label>
                    <input
                        type="text"
                        name="notes"
                        id="notes"
                        className="w-full border-2 p-3 my-3"
                    />
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

export default NewEventContainer;