import React, { Component } from 'react'

import TableTicket from './components/medium/Table'
import ContainerTicket from './components/large/Container'

import './App.css'
import 'animate.css'

class App extends Component {
    render() {
        return (
            <div className='animated App fadeIn delay-1s'>
                <header className='App-header'>
                    <h1 className='App-title'>Ticket Xpo</h1>
                </header>
                <div className='wrap'>
                    <ContainerTicket>
                        <TableTicket />
                    </ContainerTicket>
                </div>
            </div>
        )
    }
}

export default App
