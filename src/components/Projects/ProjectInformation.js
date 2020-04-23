import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import ProjectList from './ProjectList';
import { Grid, Image, Segment, Label, Dropdown, Input, Form, TextArea, Button } from 'semantic-ui-react'

const statOptions = [
  { key: 'in-prog', value: 'in-prog', text: 'In Progress' },
  { key: 'comp', value: 'comp', text: 'Completed' }
]

class ProjectInformation extends React.Component {

  render (){
    var {selectedRow, selected} = this.props
    return (

      <Segment color='red' raised>
          <Label color='red' ribbon style={{fontWeight:100, marginBottom: "40px"}}>
            Details
          </Label>
          
          <div className="container">

            <div className="row" style={{marginTop: "10px"}}>
            
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Project Title :</p>
            </div>

            <div className="col-md-3">
              {/* <div className="field pb-10">
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <input className="input100" type="text" name="username" placeholder="Username" disabled
                  />
                    <span className="symbol-input100">
                    <i className="fa fa-user" aria-hidden="true" />
                    </span>
                </div>
              </div> */}

            <Input placeholder='Enter Project Title' fluid selection value={selectedRow.title} disabled={!selected}/>

            </div>


          </div>

          <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Category :</p>
            </div>
            <div className="col-md-3">
              {/* <div className="field pb-10">
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <input className="input100" type="text" name="username" placeholder="Username"
                  />
                    <span className="symbol-input100">
                    <i className="fa fa-user" aria-hidden="true" />
                    </span>
                </div>
              </div> */}

              <Input placeholder='Enter Category' fluid selection value={selectedRow.category} disabled={!selected}/>
            </div>
          </div>
          
          <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Sub-Category :</p>
            </div>
            <div className="col-md-3">
              {/* <div className="field pb-10">
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <input className="input100" type="text" name="username" placeholder="Username"
                  />
                    <span className="symbol-input100">
                    <i className="fa fa-user" aria-hidden="true" />
                    </span>
                </div>
              </div> */}

              <Input placeholder='Enter Sub-Category' fluid selection value={selectedRow.subCategory} disabled={!selected}/>
            </div>
          </div>

          <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Description :</p>
            </div>
            <div className="col-md-3">
              {/* <div className="field pb-10">
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <input className="input100" type="text" name="username" placeholder="Username"
                  />
                    <span className="symbol-input100">
                    <i className="fa fa-user" aria-hidden="true" />
                    </span>
                </div>
              </div> */}

              <Form>
                <TextArea rows={5} placeholder='Enter Description...' value={selectedRow.description} disabled={!selected}/>
              </Form>
            </div>
          </div>

          <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Change Status :</p>
            </div>
            <div className="col-md-3">
              <Dropdown
                // clearable
                fluid
                // multiple
                // search
                selection
                options={statOptions}
                placeholder='Select Status'
                value={selectedRow.status}
                disabled={!selected}
              />
            </div>
          </div>

          <div className="row" style={{marginTop: "50px"}}>
            <div className="col-md-5" style={{textAlign:"right"}}>
            <Button content="CANCEL"
                    negative icon='cancel'
                    labelPosition='left'
                    floated='right'
              />
              <Button content='UPDATE'
                  positive icon='checkmark'
                  labelPosition='left'
                  floated='right'
              />
            </div>
          </div>
        </div>


            
        {/* <Grid>
          <Grid.Row>
            <Grid.Column textAlign='right' computer={5} mobile={6}>
              <p>Project Title :</p>
            </Grid.Column>
            <Grid.Column computer={11} mobile={6}>
              <Input placeholder='Enter Project Title' fluid selection/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign='right' computer={5} mobile={6}>
              <p>Category :</p>
            </Grid.Column>
            <Grid.Column computer={11} mobile={6}>
              <Input placeholder='Enter Category' fluid selection/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign='right' computer={5} mobile={6}>
              <p>Status :</p>
            </Grid.Column>
            <Grid.Column computer={11} mobile={6}>
            <Dropdown placeholder='Select Status' fluid selection options={options} />
            </Grid.Column>
          </Grid.Row>

        </Grid> */}

      </Segment>
       
    );
  }
}

export default ProjectInformation;
