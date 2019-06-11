import React, { Component } from 'react'

export class Title extends Component {
  render() {
    return (
      <h1>
        { this.props.content }
      </h1>
    )
  }
}

export default Title
