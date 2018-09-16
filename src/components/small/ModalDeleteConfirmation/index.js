import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormDeleteConfirmation from '../../medium/FormDeleteConfirmation'

import 'animate.css'

class ModalDimmer extends Component {
  state = { open: false }
  
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => {       
      this.setState({ open: false })
    }

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button circular icon='trash alternate' onClick={this.show(true)} />

        <Modal className='animated fadeIn delay-1s' size='mini' dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Delete Confirmation</Modal.Header>
          <Modal.Content image>
            <FormDeleteConfirmation />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ModalDimmer