import React, { Component } from 'react';
import User from './User';


export class UserBoard extends Component {
  render() {
    return (
      <div>
        <h3>User Board</h3>
        < User name='Adrianus 0' />
        < User name='Adrianus 1' />
        < User name='Adrianus 2' />
        < User name='Adrianus 3' />
      </div>
    )
  }
}

export default UserBoard
