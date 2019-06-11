import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>User: <b>{ this.props.name }</b></div>
    )
  }
}

export default User
