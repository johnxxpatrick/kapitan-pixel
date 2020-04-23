import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';


class CashPayment extends Component {

  render() {

    return (
      <div className="hero-body-login center-item">
           <div className="container-login">
            <div className="columns-login">
               <div className="column is-8 is-offset-2">
                 {/* Input */}
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="Amoun">
                     <input className="input100" type="text" name="discountcode" placeholder="Discount Code" 
                      
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                     <i className="fa fa-asterisk" aria-hidden="true" />
                     </span>
                  </div>
                 </div>
                 {/* Next */}
                 <p className="control login">
                 
                 <div className="container-login100-form-btn">
                     <div className="column">
                        <a href="#details" className="login100-form-btn" aria-controls="details" role="tab" data-toggle="tab" onClick={() => this.props.handleClickStepper('details')}>
                           Back
                        </a>
                     </div>
                     <div className="column">
                     <a href="" className="login100-form-btn" aria-controls="details" >
                           SIGNUP
                        </a>
                     </div>
                 </div>
                 </p>
                </div>
                {/* /Login Form */}
               </div>
            </div>
           </div>
      )
  }
}

export default (CashPayment);
