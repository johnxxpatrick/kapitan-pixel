import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { Header, Container, Form, Segment, Label, Table, Button, Icon, Divider } from 'semantic-ui-react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import _ from 'lodash'
import {
  Link
} from "react-router-dom";


class ProjectList extends React.Component {

  componentWillReceiveProps =(nextProps) =>{
    if(nextProps.clean != this.props.clean){
      this.cleanSelected(nextProps.clean)
    }
  }

  cleanSelected = (clean) => {
   if(clean) {
     this.refs.projListTable.cleanSelected()
   }
  }

  selectProjRow() {
     return  {
       mode: "radio",
       clickToSelect: true,
       bgColor: "#ACCFD1 ",
       hideSelectColumn: true,
       onSelect:this.props.setSelectedRow
     }
   }

  getColor = (status) => {
    var obj = {
      "Completed": "blue",
      "On-going": "yellow",
      "On-hold": "grey",
      "Cancelled": "red",
    }
    return obj[status];
  }

  trClassFormat = (row,rIndex) => {
    var className = ''
    switch (row.status) {
      case 'On-going':
        className = "warning";
        break;
      case 'On-hold':
        className = "gry";
        break;
      case 'Cancelled':
        className = "danger";
        break;
      case 'Completed':
        className = "success";
        break;
      default:
        className = "";
    }
    return className;
  }
  render (){
     var color = this.getColor(this.props.data.status)
     var tableRow = this.props.data.map( item => {
       return ( 
          <Table.Row>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.subCategory}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell><Label color={this.getColor(item.status)} size='small'>{item.status}</Label></Table.Cell>
            <Table.Cell><Button icon='edit' color="blue" size='mini'/><Button icon='eye' color="green" size='mini'/></Table.Cell>
          </Table.Row>
       )
     })
    return (
      <div>
        {
          _.isEmpty(this.props.data) ? 
          <div style={{marginBottom:'30px'}}>
            <Label size='big'><b>List of Projects</b></Label>
            <Divider clearing />
            <div className="row" style={{display:'block', textAlign: 'center'}}>
              <img src="images/norecordfound.png" alt="logo" style={{width:'400px', height:'400px'}}/> 
            </div>
            <div className="row" style={{display:'block', textAlign: 'center'}}>
                <h2>No Record Found</h2>
            </div>
            <div className="row" style={{display:'block', textAlign: 'center'}}>
              <Link to="/create-project">
                <Button primary size='medium'>Create Project</Button>
              </Link>
            </div>
          </div>
        :
        <div>
          <Label size='big'><b>List of Projects</b></Label>
          <Link to="/create-project"><Button primary floated='right' icon labelPosition='left'>
                <Icon name='plus' />Add New Project </Button>
          </Link>
          <Divider clearing />
          <Segment color='red' raised style={{height:'500px'}}>
            <Label color='red' ribbon style={{fontWeight:100, marginBottom: "40px"}}>
              List
            </Label>
            {/* <div className="proj-list-container">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Project Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Project Title">The Wizard of Oz</td>
                    <td data-label="Description">Victor Fleming</td>
                    <td data-label="Status">Active</td>
                    <td data-label="Action"><button>Edit</button></td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Project Title">The Third Man</td>
                    <td data-label="Description">Carol Reed</td>
                    <td data-label="Status">Active</td>
                    <td data-label="Action"><button>Edit</button></td>
                  </tr>
                  <tr>
                    <td scope="row" data-label="Project Title">Citizen Kane</td>
                    <td data-label="Description">Orzon Welles</td>
                    <td data-label="Status">Inactive</td>
                    <td data-label="Action"><button>Edit</button></td>
                  </tr>
                </tbody>
              </table> */}

                {/* <Container>
                <Form>
                <BootstrapTable ref='projListTable' striped={true} height={400}
                                selectRow={this.selectProjRow()} data={this.props.data} search={true} style={{marginBottom:0}}
                                trClassName={this.trClassFormat}>
                  <TableHeaderColumn isKey dataField='id' hidden>ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='title'>Project Title</TableHeaderColumn>
                  <TableHeaderColumn dataField='subCategory'>Type</TableHeaderColumn>
                  <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
                  <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                  <TableHeaderColumn dataField='status'>Action</TableHeaderColumn>
                </BootstrapTable>
                </Form>
              </Container> */}
            {/* </div> */}

            <Table size='small' style={{'height':'300px', 'overflowY':'scroll'}}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>PROJECT TITLE</Table.HeaderCell>
                  <Table.HeaderCell>TYPE</Table.HeaderCell>
                  <Table.HeaderCell>CATEGORY</Table.HeaderCell>
                  <Table.HeaderCell>STATUS</Table.HeaderCell>
                  <Table.HeaderCell>ACTION</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {tableRow}
              </Table.Body>
            </Table>
          </Segment>
        </div>
      }
      </div>
    );
  }
}

export default ProjectList;
