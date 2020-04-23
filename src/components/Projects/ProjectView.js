import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import ProjectList from './ProjectList';
import ProjectInformation from './ProjectInformation';
import { Grid, Segment, Modal, Icon, Button, Divider, Label } from 'semantic-ui-react'
import {
  Link
} from "react-router-dom";

var products = [{
  id: 1,
  title: "Product1",
  category: "Sample1",
  subCategory: "Sub-Sample1",
  description: "This is an example of a product description.",
  status: "Completed"
}, 
{
  id: 2,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 3,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 4,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 5,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 6,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 7,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 8,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 9,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 10,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}, 
{
  id: 11,
  title: "Product2",
  category: "Sample2",
  subCategory: "Sub-Sample2",
  description: "This is an example of a product description.",
  status: "On-going"
}
];

class ProjectView extends React.Component {

  state = {
    branchList : [],
    selectedRow:{},
    selected: false,
    isOpen: false,
    open: false
  }

  setSelectedRow(row, isSelected){
    //console.log('isSelected:', isSelected)
    isSelected ?
      this.setState({
        selectedRow: row,
        selected: true
    }) :
      this.setState({
        selectedRow: {},
        selected: false
    })
  }

  closeConfigShow = (closeOnEscape, closeOnRootNodeClick) => () => {
    this.setState({ closeOnEscape, closeOnRootNodeClick, isOpen: true })
  }


show = size => () => this.setState({ size, open: true })
close = () => this.setState({ openSuccessModal: false , openSuccessModalEdit: false})

  render (){
    console.log('selectedRow', this.state.selectedRow);
    var {selectedRow, selected, closeOnRootNodeClick, isOpen} = this.state
    return (
      <Segment>
        
        {/* <Modal
             trigger={<Button primary floated='right' icon labelPosition='left'
                onClick={this.closeConfigShow(true, false)}>
               <Icon name='plus' />Add New Project </Button>}
                closeOnRootNodeClick={closeOnRootNodeClick}
                open={isOpen}>
              <Modal.Header color='blue'>Add New Project</Modal.Header>
              <Modal.Content segment>
            </Modal.Content>
            <Modal.Actions>
              <Button positive icon='checkmark' labelPosition='left' content='SAVE'
               />
              <Button negative icon='cancel' labelPosition='left' content='CANCEL' />
            </Modal.Actions>
        </Modal> */}
        
          <ProjectList 
                data={products}
                setSelectedRow={this.setSelectedRow.bind(this)}
                
                />

        {/* <Grid>
          <Grid.Row stretched  columns='equal'>
            <Grid.Column width={9}>
              <ProjectList 
                data={products}
                setSelectedRow={this.setSelectedRow.bind(this)}
                
                />
            </Grid.Column>
            <Grid.Column>
              <ProjectInformation 
                selectedRow={selectedRow} 
                selected={selected} />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Segment>
    );
  }
}

export default ProjectView;
