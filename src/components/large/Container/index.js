import React from 'react'
import { Container } from 'semantic-ui-react'

const ContainerTicket = ({children}) => (
    <div>
        <Container textAlign='center'>{children}</Container>
    </div>
)

export default ContainerTicket