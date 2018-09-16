import React, { Component } from 'react'
import { Button, Form, Input, TextArea } from 'semantic-ui-react'

import AddTicket from '../../../function/AddTicket'


class FormAddTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            derivation: '',
            destination: '',
            log: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addTicket = async (event) => {
        event.preventDefault()
        const URL = '/add'
        const ticket = {
            name: this.state.name,
            derivation: this.state.derivation,
            destination: this.state.destination,
            log: this.state.log
        }

        await AddTicket(URL, ticket)
        // await GetData('/')
    }

    render() {

        return (
                <Form onSubmit={this.addTicket}>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} onChange={this.handleChange} name='name' value={this.state.name} label='Ticket Name' placeholder='Ticket Name' />
                        <Form.Field control={Input} onChange={this.handleChange} name='derivation' value={this.state.derivation} label='Derivation' placeholder='Derivation' />
                        <Form.Field control={Input} onChange={this.handleChange} name='destination' value={this.state.destination} label='Destination' placeholder='Destination' />

                    </Form.Group>
                    <Form.Field control={TextArea} onChange={this.handleChange} name='log' value={this.state.log} label='Log' placeholder='Type ticket log here . . .' />
                    <Form.Field control={Button} >Submit</Form.Field>
                </Form>
        )
    }
}

export default FormAddTicket