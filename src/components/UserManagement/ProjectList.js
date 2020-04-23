import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { Header, Container, Form, Segment, Label, Button, Table, Icon, Divider } from 'semantic-ui-react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import _ from 'lodash'
import Pagination from '../Shared/Pagination'
import Utils from './../../utils/format'
import {
  Link
} from "react-router-dom";


class ProjectList extends React.Component {

  state = {
    pageOfItems: []
  }
  componentWillReceiveProps =(nextProps) =>{
    if(nextProps.clean != this.props.clean){
      this.cleanSelected(nextProps.clean)
    }
  }

  cleanSelected = (clean) => {
   if(clean) {
     this.refs.userListTable.cleanSelected()
   }
  }

  selectUserRow() {
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
  
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems })
  }

  render (){
     var { pageOfItems } = this.state
     var { usersList } = this.props
    
    //  var color = this.getColor(this.props.data.status)
    //  var tableRow = this.props.usersList.map( item => {
    //    return ( 
    //       <Table.Row>
    //         <Table.Cell>{item.title}</Table.Cell>
    //         <Table.Cell>{item.subCategory}</Table.Cell>
    //         <Table.Cell>{item.category}</Table.Cell>
    //         <Table.Cell><Label color={this.getColor(item.status)} size='small'>{item.status}</Label></Table.Cell>
    //         <Table.Cell><Button icon='edit' color="blue" size='mini'/><Button icon='eye' color="green" size='mini'/></Table.Cell>
    //       </Table.Row>
    //    )
    //  })
    return (
      <div>
        <Segment color='red' raised>
            <Label color='red' ribbon style={{fontWeight:100, marginBottom: "40px"}}>
              List
            </Label>

                <Container>
                <Form>
                <BootstrapTable ref='userListTable'
                                selectRow={this.selectUserRow()} data={pageOfItems} search={true} 
                                // trClassName={this.trClassFormat}
                                striped={true} hover={true}
                                headerStyle={ { fontSize: '13px' } }
                                bodyStyle={ { fontSize: '11px' } } >
                  {/* <TableHeaderColumn isKey dataField='id' hidden>First Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='title' dataSort>First Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='title' dataSort>Middle Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='subCategory' dataSort>Last Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='category' dataSort>Suffix</TableHeaderColumn>
                  <TableHeaderColumn dataField='status' dataSort>Birthdate</TableHeaderColumn>
                  <TableHeaderColumn dataField='status' dataSort>Picture</TableHeaderColumn>
                  <TableHeaderColumn dataField='status' dataSort>Username</TableHeaderColumn>
                  <TableHeaderColumn dataField='status' dataSort>Status</TableHeaderColumn> */}

                  <TableHeaderColumn isKey dataField='nuser_id' hidden>First Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='nuser_firstname' dataSort width="120px">First Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='nuser_middlename' dataSort width="130px">Middle Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='nuser_lastname' dataSort width="120px">Last Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='nuser_suffixname' dataSort width="80px">Suffix</TableHeaderColumn>
                  <TableHeaderColumn dataField='tuser_birthdate' dataFormat={Utils.dateFormat} dataSort>Birthdate</TableHeaderColumn>
                  {/* <TableHeaderColumn dataField='nuser_picture' dataSort>Picture</TableHeaderColumn> */}
                  <TableHeaderColumn dataField='nuser_email' dataSort>Email</TableHeaderColumn>
                  <TableHeaderColumn dataField='nuser_phone1' dataSort>Number</TableHeaderColumn>
                  <TableHeaderColumn dataField='nuser_name' dataSort>Username</TableHeaderColumn>
                  <TableHeaderColumn dataField='nuser_activated' dataFormat={Utils.status} dataSort>Status</TableHeaderColumn>
                </BootstrapTable>
                </Form>
                <div style={{marginTop: "10px"}}>
                  <Pagination items={usersList} onChangePage={this.onChangePage.bind(this)}/>
                </div>
              </Container>

        </Segment>        
      </div>   
    );
  }
}

export default ProjectList;
