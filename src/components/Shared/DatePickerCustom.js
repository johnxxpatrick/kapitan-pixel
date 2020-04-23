import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Header, Grid, List, Button, Label, Divider, Menu, Dimmer, Loader, Segment,TextArea,Form, Container, Icon, Modal} from 'semantic-ui-react'


export default class DatePickerCustom extends Component {
render(){
  var { onChangeDate, birthdate, years, months } = this.props
  return(
    <Form>
      <DatePicker 
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
            {"<"}
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
            {">"}
          </button>
        </div>
      )} 
          value={birthdate} 
          onChange={onChangeDate.bind(this,'birthdate')}/>
      </Form>
    )
  }
}
