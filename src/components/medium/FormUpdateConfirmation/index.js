import React, { Component } from 'react'
import { Form, Input, Button,Dropdown } from 'semantic-ui-react'

import UpdateTicket from '../../../function/UpdateTicket'

class FormUpdateConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            status: '',
            log: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    updateTicket = async (event) => {
        let ticketNumber = this.state.id
        event.preventDefault()

        const ticketData = {
            status: this.state.status,
            log: this.state.log
        }

        await UpdateTicket(ticketNumber, ticketData)
    }

    render() {
        return (
            <Form onSubmit={this.deleteTicket}>
                <Form.Field>
                    <Form.Field
                        control={Input}
                        onChange={this.handleChange}
                        name='id'
                        value={this.state.id}
                        label='Input ticket number to confirmation. e.g. "5b9db382ac713a0015306XXX".' />
                </Form.Field>
                <Form.Field>
                    <Dropdown text='Status' name='status'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Open' value='open' onClick={this.handleChange} />
                            <Dropdown.Item text='Active' value='close' onClick={this.handleChange} />
                            <Dropdown.Item text='Failed' value='failed' onClick={this.handleChange} />
                            <Dropdown.Item text='Closed' value='closed' onClick={this.handleChange} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Field>
                <Form.Field>
                    <Form.Field
                        control={Input}
                        onChange={this.handleChange}
                        name='log'
                        value={this.state.log}
                        label='Type some log . . .' />
                </Form.Field>
                <Form.Field control={Button} >Confirm!</Form.Field>
            </Form>
        )
    }
}

export default FormUpdateConfirmation