import React from 'react';

export default class Checkbox extends React.Component {

  render() {
    return (
      <div className="block pb-4">
          <input className="mr-4" type="checkbox" name="friends" defaultChecked={false} onChange={() => this.props.handleFriendChange(this.props.user.id)} />
          <label htmlFor="friends" >{this.props.user.email}</label>
      </div>
    )
  }
}
