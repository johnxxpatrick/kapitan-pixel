import React, { Component } from 'react'

import { Header, Grid, List, Button, Label, Divider, Menu, Dimmer, Loader, Segment,TextArea,Form, Container, Icon, Modal} from 'semantic-ui-react'


export default class SuccessAlertModal extends Component {
render(){
  return(
    <Modal size='small' open = {this.props.isOpen} >
      <Header>
        <Container textAlign='center'><Icon name='check circle outline' size='big' color='green' /><b>{this.props.header}</b></Container>
      </Header>
          <Modal.Content>
             <Container textAlign='center'><b>{this.props.body}</b> </Container>
          </Modal.Content>
              <Modal.Actions>
                <Button negative icon='cancel' labelPosition='left' content='Close' onClick={this.props.close} />
              </Modal.Actions>
    </Modal>
    )
  }
}
