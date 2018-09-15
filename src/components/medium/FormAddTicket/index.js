import React, { Component } from 'react'
import { Button, Form, Input, Radio, TextArea } from 'semantic-ui-react'

import AddTicket from '../../../funtion/AddTicket'

class FormAddTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            status: '',
            derivation: '',
            destination: '',
            log: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }

    addTicket = async (event) => {
        event.preventDefault()

        const ticket = {
            name: this.state.name,
            status: this.state.status,
            derivation: this.state.derivation,
            destination: this.state.destination,
            log: this.state.log
        }

        await AddTicket(ticket)
        
    }

    render() {
        const { value } = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field control={Input} onChange={this.handleChange} value={this.state.name} label='Ticket Name' placeholder='Ticket Name' />
                    <Form.Field control={Input} onChange={this.handleChange} value={this.state.derivation} label='Derivation' placeholder='Derivation' />
                    <Form.Field control={Input} onChange={this.handleChange} value={this.state.destination} label='Destination' placeholder='Destination' />
                </Form.Group>
                <Form.Group inline>
                    <label>Status</label>
                    <Form.Field
                        control={Radio}
                        label='Open'
                        value={this.state.status}
                        checked={value === 'open'}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label='Active'
                        value={this.state.status}
                        checked={value === 'active'}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label='Failed'
                        value={this.state.status}
                        checked={value === 'failed'}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={Radio}
                        label='Closed'
                        value={this.state.status}
                        checked={value === 'closed'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Field control={TextArea} value={this.state.log} onChange={this.handleChange} label='Log' placeholder='Type ticket log here . . .' />
                <Form.Field control={Button} onSubmit={this.addTicket}>Submit</Form.Field>
            </Form>
        )
    }
}

export default FormAddTicket