import React from 'react'

export default class UserInput extends React.Component {
  render() {
    return <input onChange={this.props.handler} />
  }
}