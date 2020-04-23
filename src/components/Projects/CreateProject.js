import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import ProjectList from './ProjectList';
import ProjectInformation from './ProjectInformation';
import { Grid, Segment, Modal, Icon, Button, Divider, Label, Input, Form, TextArea, Dropdown } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';

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
}
];

var customStyle = {
  dropZoneStyle : {
    width : "initial",
    backgroundColor : "#f5f5f5",
    height : "200px",
    border : "2px lightgray dashed",
    borderRadius : "3px"
  }
}

class ProjectView extends React.Component {
  
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: [],
      branchList : [],
      selectedRow:{},
      selected: false,
      isOpen: false,
      open: false
    };
  }

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

  _onDrop = (droppedFiles) => {
    return droppedFiles
  }

  render (){
    console.log('selectedRow', this.state.selectedRow);
    var {selectedRow, selected, closeOnRootNodeClick, isOpen} = this.state
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));
    
    return (
      <div>
        <Segment color='red'>
          <Label size='big'><b>Creat Project</b></Label>
            <Divider clearing />
            {/* <Segment color='red' stacked><p style={{fontWeight: 'bold', color:'black'}}>Select the available sevice/package you bought</p></Segment> */}
            <Label size='large'>Select the available sevice/package you bought</Label>

            <div className="row" style={{marginTop: "20px"}}>
              <div className="col-md-2" style={{textAlign:"right"}}>
                <p>Service/Package :</p>
              </div>
              <div className="col-md-3">
                {/* <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title}/> */}
                <Dropdown
                  // clearable
                  fluid
                  // multiple
                  // search
                  selection
                  options={products}
                  placeholder='Select Service/Package'
                  // value={selectedRow.status}
                  // disabled={!selected}
               />
              </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
              <div className="col-md-2" style={{textAlign:"right"}}>
                <p>Inclusion :</p>
              </div>
              <div className="col-md-3">
                <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title}/>
              </div>
            </div>
            
            {/* <Segment color='red' stacked><p style={{fontWeight: 'bold', color:'black'}}>Project Information</p></Segment> */}
            <Label size='large'>Project Information</Label>

              <div className="row" style={{marginTop: "20px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                  <p>Project Type :</p>
                </div>
                <div className="col-md-3">
                  {/* <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title}/> */}
                  <Dropdown
                      // clearable
                      fluid
                      // multiple
                      // search
                      selection
                      options={products}
                      placeholder='Select Project Type'
                      // value={selectedRow.status}
                      // disabled={!selected}
                  />
                </div>
              </div>

              <div className="row" style={{marginTop: "10px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                  <p>Category :</p>
                </div>
                <div className="col-md-3">
                  {/* <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title}/> */}
                  <Dropdown
                      // clearable
                      fluid
                      // multiple
                      // search
                      selection
                      options={products}
                      placeholder='Select Category'
                      // value={selectedRow.status}
                      // disabled={!selected}
                  />
                </div>
              </div>

              <div className="row" style={{marginTop: "10px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                  <p>Project Title :</p>
                </div>
                <div className="col-md-5">
                  <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title}/>
                </div>
              </div>

              <div className="row" style={{marginTop: "10px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                  <p>Detailed Description :</p>
                </div>
                <div className="col-md-5">
                  <Form>
                    <TextArea rows={5} placeholder='Enter Description...' value={selectedRow.description}/>
                  </Form>
                </div>
              </div>

              <div className="row" style={{marginTop: "10px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                  <p>Dimension :</p>
                </div>
                <div className="col-md-5">
                  <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title}/>
                </div>
              </div>

              <div className="row" style={{marginTop: "10px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                  <p>Brand Name :</p>
                </div>
                <div className="col-md-5">
                  <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title}/>
                </div>
              </div>

              <div className="row" style={{marginTop: "10px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                  <p>Upload Resource(s) :</p>
                </div>
                <div className="col-md-5">
                  {/* <Dropzone onDrop={files => console.log(files)} style={customStyle.dropZoneStyle}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column textAlign='right' width={7}>
                          <Icon name='cloud download' size='huge' className="dropIcon" />
                        </Grid.Column>
                        <Grid.Column width={9}>
                          <h5 className="innerDroph4">DRAG AND DROP FILES HERE</h5>
                          <p className="innerDropP1">OR CLICK TO ADD FILES..</p>
                          <p className="innerDropP2"> - strictly PDF only<br/>
                                                      - 5mb (max) for each file</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Dropzone> */}
                </div>

              </div>
              <div className="row" style={{marginTop: "40px"}}>
                <div className="col-md-2" style={{textAlign:"right"}}>
                </div>
                <div className="col-md-3">
                  <Button primary fluid>Submit</Button>
                </div>
              </div>
              
            </Segment>

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
        </div>
    );
  }
}

export default ProjectView;
