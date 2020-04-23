import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import { Grid, Radio } from 'semantic-ui-react';
import CashPayment from './CashPayment'
import CardPayment from './CardPayment'

class RegisterPayment extends Component {
   state = { 
      paymentMode: "cash"
   }
    
   handleChange = (e, { value }) => this.setState({ paymentMode: value })


    render() {
  

    return (
      <div className="hero-body-login center-item">
           <div className="container-login">
               <Grid>
                  <Grid.Row>
                     <Grid.Column>
                        <Radio
                           label='Credit/Debit Card'
                           name='radioGroup'
                           value='card'
                           checked={this.state.paymentMode == "card"}
                           onChange={this.handleChange}
                        />
                     </Grid.Column>
                     <Grid.Column>
                        <Radio
                           label='Over-the-Counter'
                           name='radioGroup'
                           value='cash'
                           checked={this.state.paymentMode === 'cash'}
                           onChange={this.handleChange}
                        />
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                     {
                        this.state.paymentMode == "cash" ? <CashPayment /> : <CardPayment/>
                     }
                  </Grid.Row>
               </Grid>
           </div>
          </div>
      )
  }
}

export default (RegisterPayment);
