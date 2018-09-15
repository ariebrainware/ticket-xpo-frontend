import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import ButtonEdit from '../../small/ButtonEdit'
import GetData from '../../../funtion/GetData'

import 'semantic-ui-css/semantic.min.css'
import 'animate.css'

export default class TableTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticket: []
        }
    }

    componentDidMount = async () => {
        const URL = 'tickets/'
        const response = await GetData(URL)

        await this.setState({
            ticket: response.data
        })
    }

    render() {
        const RowSegment = this.state.ticket.map(item => {
            const {name,status,derivation,destination,log} = item
            return (
                <Table.Row>
                    <Table.Cell collapsing><ButtonEdit /></Table.Cell>
                    <Table.Cell textAlign='center'>{name}</Table.Cell>
                    <Table.Cell textAlign='center'>{status}</Table.Cell>
                    <Table.Cell textAlign='center'>{derivation}</Table.Cell>
                    <Table.Cell textAlign='center'>{destination}</Table.Cell>
                    <Table.Cell textAlign='center'>{log}</Table.Cell>
                </Table.Row>
            )
        })
        return (
            <Table celled inverted selectable className='animated fadeIn delay-2s'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell textAlign='center'>Ticket Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Derivation</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Destination</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Log</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {RowSegment}
                </Table.Body>
            </Table>
        )
    }
}
