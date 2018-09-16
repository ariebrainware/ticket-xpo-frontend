import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ButtonCustom extends Component {
    state = {}

    handleClick = () => this.setState({ active: !this.state.active })

    render() {
        const { active } = this.state
        if (this.props.toggle) {
            return (
                <Button circular toggle active={active} onClick={this.handleClick} icon={this.props.iconType} />
            )
        } else {
            return (
                <Button circular icon={this.props.iconType} />
            )
        }
    }
}

export default ButtonCustom