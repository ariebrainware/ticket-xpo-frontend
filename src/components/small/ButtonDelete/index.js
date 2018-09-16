import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ButtonEdit extends Component {
  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    const { active } = this.state

    return (
      <Button circular toggle  active={active} onClick={this.handleClick} icon='trash alternate' />
    )
  }
}

export default ButtonEdit