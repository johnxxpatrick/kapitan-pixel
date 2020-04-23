import React, { Component } from 'react'
import { Modal, Segment, Dimmer, Loader } from 'semantic-ui-react'


export default class AlertModal extends Component {

  render() {
    //console.log("OPEN MODAL", this.props.isOpen)
    var { isOpen } = this.props
      return (
        <div>
          <Modal className="alertModal" open={isOpen} closeOnDimmerClick={false}>
            <Modal.Header style={{'display':'none'}}>
              Please Wait...
            </Modal.Header>
            <Modal.Content className="noPadding">
              <Segment  style={{'height' : '250px'}}>
                <Dimmer active inverted>
                  <Loader inverted>Loading...</Loader>
                </Dimmer>

              </Segment>
            </Modal.Content>

          </Modal>
        </div>
      )
  }
}
