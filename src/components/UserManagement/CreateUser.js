import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import ProjectList from './ProjectList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Grid, Image, Segment, Label, Dropdown, Input, Form, TextArea, Button, Icon, Modal } from 'semantic-ui-react'

const statOptions = [
  { key: 0, text: 'Inactive', value: 0 },
  { key: 1, text: 'Active', value: 1 },
]

class CreateNewUser extends React.Component {


  handleChange(event) {
    this.props._onChange(event)
  }

  inputChange(type,e,{value} ){
    // console.log("value:" , value)
    this.props.onInputChange(type, value)
  
  }
  changeDate(name, dateValue){
    // console.log("value:" , value)
    this.props.onChangeDate(name, dateValue)
  }

  onChangeStat(e, {value}) {
    this.props.onChangeDropdown(value)
  }

  getYears = (startYear) => {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;  
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }   
    return years;
}


  render (){
    var {selectedRow, selected,  firstName, middleName, lastName, suffix, birthdate, email, username,
      password, number, file, status} = this.props

    // const years = range(1990, getYear(new Date()) + 1, 1);
    const years = this.getYears(1990)
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    
    return (

          <div className="container">
            <div className="row" style={{marginTop: "10px"}}>

            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>First Name :</p>
            </div>

            <div className="col-md-3">
              <Input placeholder='Enter First Name' fluid selection 
                value={firstName}
                onChange={this.inputChange.bind(this,'firstName')}
                icon={<Icon name='user' size='small'/>}/>
            </div>

            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Middle Name :</p>
            </div>
            <div className="col-md-3">
              <Input placeholder='Enter Middle Name' fluid selection 
                value={middleName}
                onChange={this.inputChange.bind(this,'middleName')} 
                icon={<Icon name='user' size='small'/>}/>
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Last Name :</p>
            </div>
            <div className="col-md-3">
              <Input placeholder='Enter Last Name' fluid selection 
                value={lastName}
                onChange={this.inputChange.bind(this,'lastName')} 
                icon={<Icon name='user' size='small'/>}/>
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Suffix :</p>
            </div>
            <div className="col-md-3">
              <Input placeholder='Enter Suffix Name' fluid selection 
                value={suffix}
                onChange={this.inputChange.bind(this,'suffix')} 
                icon={<Icon name='user' size='small'/>}/>
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Birthdate :</p>
            </div>
            <div className="col-md-3">
            
              <Form>
                <DatePicker icon='calendar alternate'
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                      <Icon name='angle left' size='large'/>
                    </button>
                    <select
                      value={date.getYear()}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {years.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={months[date.getMonth()]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                      <Icon name='angle right' size='large'/>
                    </button>
                  </div>
                )} 
                  value={birthdate} 
                  onChange={this.changeDate.bind(this,'birthdate')}/>
              </Form>
               
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Number :</p>
            </div>
            <div className="col-md-3">
              <Input placeholder='Enter Number' fluid selection 
                value={number}
                onChange={this.inputChange.bind(this,'number')} 
                icon={<Icon name='phone' />}/>
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Email :</p>
            </div>
            <div className="col-md-3">
              <Input placeholder='Enter Email' fluid selection 
                value={email}
                onChange={this.inputChange.bind(this,'email')} 
                icon={<Icon name='envelope' size='small'/>}/>
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Username :</p>
            </div>
            <div className="col-md-3">
              <Input placeholder='Enter Username' fluid selection 
                value={username}
                onChange={this.inputChange.bind(this,'username')} 
                icon={<Icon name='user' size='small'/>}/>
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Password :</p>
            </div>
            <div className="col-md-3">
              <Input placeholder='Enter Password' fluid selection 
                value={password}
                onChange={this.inputChange.bind(this,'password')} 
                icon={<Icon name='lock' size='small'/>}/>
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Status :</p>
            </div>
            <div className="col-md-3">
              <Dropdown
                  fluid
                  selection
                  options={statOptions}
                  placeholder='Select Status'
                  onChange={this.onChangeStat.bind(this)} 
                  value={status}
               />
            </div>
            </div>

            <div className="row" style={{marginTop: "10px"}}>
            <div className="col-md-2" style={{textAlign:"right"}}>
              <p>Image :</p>
            </div>
            <div className="col-md-3">
            <form>
              <input 
                type="file" 
                // value={file}
                onChange={this.handleChange.bind(this)}
                />
            </form>
            </div>
            </div>
            
          </div>
    );
  }
}

export default CreateNewUser;
