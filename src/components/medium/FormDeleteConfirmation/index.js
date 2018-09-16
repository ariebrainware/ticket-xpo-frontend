import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

import DeleteTicket from '../../../function/DeleteTicket'

class FormDeleteConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }

    deleteTicket = async (event) =>{
        let ticketNumber = this.state.id
        event.preventDefault()

        await DeleteTicket(ticketNumber)    
        console.log(ticketNumber)   
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
                <Form.Field control={Button} >Confirm!</Form.Field>
            </Form>
        )
    }
}

export default FormDeleteConfirmation