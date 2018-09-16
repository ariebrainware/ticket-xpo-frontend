import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import GetData from '../../../function/GetData'
import ModalDimmer from '../ModalDimmer';
import ModalDeleteConfirmation from '../../small/ModalDeleteConfirmation'
import ModalUpdateConfirmation from '../../small/ModalUpdateConfirmation'

import 'semantic-ui-css/semantic.min.css'
import 'animate.css'


export default class TableTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticket: [],
            interval: '',
        }
    }

    getTicket = async () => {
        const URL = '/'
        const response = await GetData(URL)

        await this.setState({
            ticket: response.data
        })
    }

    componentDidMount = () => {
        this.getTicket()
        const fetch = setInterval(this.getTicket, 5000)
        this.setState({ interval: fetch })
    }

    componentWillUnmount = () => {
        clearInterval(this.state.interval)
    }

    render() {
        const RowSegment = this.state.ticket.map(item => {
            const { name, status, derivation, destination, log ,_id} = item
            return (
                <Table.Row>
                    <Table.Cell collapsing><ModalUpdateConfirmation /></Table.Cell>
                    <Table.Cell textAlign='center'>{_id}</Table.Cell>
                    <Table.Cell textAlign='center'>{name}</Table.Cell>
                    <Table.Cell textAlign='center'>{status}</Table.Cell>
                    <Table.Cell textAlign='center'>{derivation}</Table.Cell>
                    <Table.Cell textAlign='center'>{destination}</Table.Cell>
                    <Table.Cell textAlign='center'>{log}</Table.Cell>
                    <Table.Cell collapsing><ModalDeleteConfirmation /></Table.Cell>
                </Table.Row>
            )
        })
        return (
            <Table celled inverted selectable className='animated fadeIn delay-2s'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell textAlign='center'>Ticket Number</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Ticket Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Derivation</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Destination</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Log</Table.HeaderCell>
                        <Table.HeaderCell />
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {RowSegment}
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8' textAlign='center'>
                            <ModalDimmer />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
}
