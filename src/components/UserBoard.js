import React, { Component } from 'react';
import User from './User';
import usersData from './data/users'


export class UserBoard extends Component {
  render() {
    let users = usersData.users
    return (
      <div>
        <h3>User Board</h3>
        {users.map(user => {
          return < User name={user.name}/>
        })}
      </div>
    )
  }
}

export default UserBoard
