import React, { Component } from 'react'
import withBorder from '../hoc/withBorder'

class Greetings extends Component {
  render() {
    return (
      <div>Hello friends!</div>
    )
  }
}

export default withBorder('success')(withBorder('success')(Greetings))
