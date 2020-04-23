import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import moment from 'moment'
import ProjectList from './ProjectList';
import ProjectInformation from './ProjectInformation';
import CreateNewUser from './CreateUser';
import SuccessAlertModal from '../Shared/SuccessAlertModal'
import LoadingModal from '../Shared/LoadingModal'
import { Grid, Segment, Modal, Icon, Button, Divider, Label, Image, Dimmer, Loader } from 'semantic-ui-react'
import {
  Link
} from "react-router-dom";

var api = require('../../api/api.js').webApi;

class UserManagementView extends React.Component {

  state = {
    branchList : [],
    selectedRow:{},
    selected: false,
    isOpen: false,
    open: false,
    usersList: [],
    file: 'https://react.semantic-ui.com/images/wireframe/image.png',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    birthdate: moment().format("MM/DD/YYYY"),
    email: '',
    username: '',
    password: '',
    number: '',
    status: 0, 
    openSuccessModal: false,
    openLoadingModal: false, 
    loading: false,
  }

  componentWillMount = () => {
    this.getUsersList();
  };

  setSelectedRow(row, isSelected){
    isSelected ?
      this.setState({
        selectedRow: row,
        selected: true,
        isOpen: true,
        file: row.nuser_picture,
        firstName: row.nuser_firstname,
        middleName: row.nuser_middlename,
        lastName: row.nuser_lastname,
        suffix: row.nuser_suffixname,
        birthdate: row.user_birthdate,
        email: row.nuser_email,
        username: row.nuser_name,
        password: row.nuser_password,
        number: row.nuser_phone1,
        status: row.nuser_activated,
      }) :
      this.setState({
        selectedRow: {},
        selected: false,
        isOpen: false,
        file: 'https://react.semantic-ui.com/images/wireframe/image.png',
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: '',
        birthdate: moment().format("MM/DD/YYYY"),
        email: '',
        username: '',
        password: '',
        number: '',
        status: 0
    })
  }

  closeConfigShow = (closeOnEscape, closeOnRootNodeClick) => () => {
    this.setState({ closeOnEscape, closeOnRootNodeClick, isOpen: true },() => this.clearInput())
  }

  closeUserModal = () => this.setState({ isOpen: false, selected: false},() => this.clearInput())
  closeSuccessModal = () => this.setState({ openSuccessModal: false })
  
  clearInput = () => { 
    this.setState({
      file: 'https://react.semantic-ui.com/images/wireframe/image.png',
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: '',
      birthdate: moment().format("MM/DD/YYYY"),
      email: '',
      username: '',
      password: '',
      number: '',
      status: 0,
      selectedRow: {},
      selected: false,
    })
  }

  getUsersList = () => {
    this.setState({
      loading: true,
    });
    var url = api + '/api/User';
    axios
      .get(url)
      .then(res => {
        this.setState({
          usersList: res.data.data,
          loading: false
        });
       //  console.log(res)
      })
      .catch(err => {
       //  console.log(err)
      });
  };

  saveNewUser = () => {
    this.setState({
      isOpen: false,
      openLoadingModal :true,
  })

    var { firstName, middleName, lastName, suffix, birthdate, email, username,
          password, number, file, status } =  this.state
    var url = api + 'api/User';
    axios
      .post(url,{
        // "nuser_id": 3,
        "nuser_group": 1,
        "nuser_name": username,
        "nuser_email": email,
        "nuser_phone1": number,
        "nuser_password": password,
        "nuser_activated": status,
        "nuser_firstname": firstName,
        "nuser_lastname": lastName,
        "nuser_middlename": middleName,
        "nuser_suffixname": suffix,
        "tuser_birthdate": birthdate,
        "nuser_verified": status,
        "nuser_picture": file,
        "suser_facebook_id": 'sadsad'
    })
      .then(res => {
       this.getUsersList()
       this.setState({
        isOpen: false,
        openLoadingModal: false,
        openSuccessModal: true
       })
       console.log('Returned data:', res);
      })
      .catch(err => {
        console.log(err)
      });
  };

  updateUser = () => {
    this.setState({
      isOpen: false,
      openLoadingModal :true,
    })

    var { firstName, middleName, lastName, suffix, birthdate, email, username,
          password, number, file, status, selectedRow } =  this.state
    var url = api + `api/User/${selectedRow.nuser_id}`;
    axios
      .put(url,{
        "nuser_id": selectedRow.nuser_id,
        "nuser_group": 1,
        "nuser_name": username,
        "nuser_email": email,
        "nuser_phone1": number,
        "nuser_password": password,
        "nuser_activated": status,
        "nuser_firstname": firstName,
        "nuser_lastname": lastName,
        "nuser_middlename": middleName,
        "nuser_suffixname": suffix,
        "tuser_birthdate": birthdate,
        "nuser_verified": status,
        "nuser_picture": file,
        "suser_facebook_id": 'sadsad'
    })
      .then(res => {
       this.getUsersList()
       this.setState({
        isOpen: false,
        openLoadingModal: false,
        openSuccessModal: true
       })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      });
  };

  _onChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  onInputChange = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  onChangeDate = (dateValue, date) =>{
    this.setState({
      [dateValue]: moment(date).format("MM/DD/YYYY")
    })
  }

  onChangeDropdown = (value)=> {
    this.setState({
       status: value
     });
  }

  handleDisable = ()=> {
    var { firstName, middleName, lastName, suffix, birthdate, email, username,
      password, number, file } =  this.state
      
    var btnDisabled = firstName == '' || middleName == '' || lastName == '' || suffix == '' || birthdate == '' || email == '' || 
                      username == '' || password == '' || number == ''
    return btnDisabled
  }
    

  render (){
    var { selectedRow, selected, closeOnRootNodeClick, isOpen,
          usersList, openSuccessModal, openLoadingModal, loading, firstName, middleName, 
          lastName, suffix, birthdate, email, username, password, number, file, status } = this.state
    
    console.log('this.state', this.state);
    
    var btnSave = selected ? 
                  <Button positive icon='checkmark' labelPosition='left' content='UPDATE' onClick={this.updateUser.bind(this)} disabled={this.handleDisable()}/>
                  :
                  <Button positive icon='checkmark' labelPosition='left' content='SAVE' onClick={this.saveNewUser.bind(this)} disabled={this.handleDisable()}/>
    
    return (
      <Segment>
        
        <Modal
             trigger={<Button primary floated='right' icon labelPosition='left'
                onClick={this.closeConfigShow(true, false)}>
               <Icon name='plus' />Add New User</Button>}
                closeOnRootNodeClick={closeOnRootNodeClick}
                open={isOpen}>
              <Modal.Header color='blue'><Icon name='user'/>{ selected ? 'Edit User' : 'Add New User' }</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src={file} bordered/>
                    <Modal.Description>
                      <CreateNewUser
                        selectedRow={selectedRow} 
                        selected={selected}
                        _onChange={this._onChange}
                        onInputChange={this.onInputChange}
                        birthdate={birthdate}
                        onChangeDate={this.onChangeDate}
                        onChangeDropdown={this.onChangeDropdown}
                        file={file}
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        suffix={suffix}
                        birthdate={birthdate}
                        email={email}
                        username={username}
                        password={password}
                        number={number}
                        status={status}
                      />
                    </Modal.Description>
                 </Modal.Content>
            <Modal.Actions>
              {btnSave}
              <Button negative icon='cancel' labelPosition='left' content='CANCEL' onClick={this.closeUserModal}/>
            </Modal.Actions>
        </Modal>
        <LoadingModal isOpen={openLoadingModal} />
        <SuccessAlertModal
             isOpen={openSuccessModal}
             header = "Success"
             body ="User Successfully Saved  "
             close={this.closeSuccessModal}/>

        <Divider clearing style={{'marginTop':'50px'}}/>
        
        {/* <div className="row">
          <div className="col-md-6"> */}
            <Dimmer active={loading} inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
            <ProjectList 
              usersList={usersList}
              setSelectedRow={this.setSelectedRow.bind(this)}/>
          {/* </div> */}
          {/* <div className="col-md-6">
            <ProjectInformation 
              selectedRow={selectedRow} 
              selected={selected} />
          </div> */}
        {/* </div> */}
      </Segment>
    );
  }
}

export default UserManagementView;
