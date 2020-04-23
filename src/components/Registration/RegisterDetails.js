import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import { Input } from 'semantic-ui-react'


class RegisterDetails extends Component {

  render() {

    return (
        // <Grid centered>
        //   <Grid.Row style={{ paddingBottom: 0}}>
        //     <Grid.Column>
        //       <div className="field pb-10">
        //         <div className="wrap-input100 validate-input" data-validate="Username is required">
        //             <input className="input100" type="text" name="firstname" placeholder="First Name" 
        //             />
        //             <span className="focus-input100" />
        //             <span className="symbol-input100">
        //             <i className="fa fa-asterisk" aria-hidden="true" />
        //             </span>
        //         </div>
        //       </div>
        //     </Grid.Column>
        //     <Grid.Column>
        //       <div className="field pb-10">
        //         <div className="wrap-input100 validate-input" data-validate="Username is required">
        //             <input className="input100" type="text" name="lastname" placeholder="Last Name" 
        //           />
        //             <span className="focus-input100" />
        //             <span className="symbol-input100">
        //             <i className="fa fa-asterisk" aria-hidden="true" />
        //             </span>
        //         </div>
        //       </div>
        //     </Grid.Column>
        //   </Grid.Row>

        //   <Grid.Row style={{paddingTop: 0}}>
        //     <Grid.Column>
        //       <div className="field pb-10">
        //         <div className="wrap-input100 validate-input" data-validate="Username is required">
        //             <input className="input100" type="text" name="firstname" placeholder="Email" 
        //             />
        //             <span className="focus-input100" />
        //             <span className="symbol-input100">
        //             <i className="fa fa-asterisk" aria-hidden="true" />
        //             </span>
        //         </div>
        //       </div>
        //     </Grid.Column>
        //     <Grid.Column>
        //       <div className="field pb-10">
        //         <div className="wrap-input100 validate-input" data-validate="Username is required">
        //             <input className="input100" type="text" name="lastname" placeholder="Password" 
        //           />
        //             <span className="focus-input100" />
        //             <span className="symbol-input100">
        //             <i className="fa fa-asterisk" aria-hidden="true" />
        //             </span>
        //         </div>
        //       </div>
        //     </Grid.Column>
        //   </Grid.Row>
        // </Grid>

        <div className="hero-body-login center-item">
           <div className="container-login">
            <div className="columns-login">
               <div className="column is-8 is-offset-2">
                {/* Login Form */}
                <div id="signin-form" className="login-form animated preFadeInLeft fadeInLeft">
                 {/* Input */}
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="First Name is required">
                     <input className="input100" type="text" name="firstname" placeholder="First Name" 
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                     <i className="fa fa-asterisk" aria-hidden="true" />
                     </span>
                  </div>
                 </div>
                 {/* Input */}
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                     <input className="input100" type="text" name="lastname" placeholder="Last Name" 
                      
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                     <i className="fa fa-asterisk" aria-hidden="true" />
                     </span>
                  </div>
                 </div>
                 {/* Input */}
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="Email is required">
                     <input className="input100" type="email" name="email" placeholder="Email" 
                      
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                     <i className="fa fa-asterisk" aria-hidden="true" />
                     </span>
                  </div>
                 </div>
                 {/* Input */}
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                     <input className="input100" type="password" name="password" placeholder="Password" 
                      
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                     <i className="fa fa-asterisk" aria-hidden="true" />
                     </span>
                  </div>
                 </div>
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="Confirm Password is required">
                     <input className="input100" type="password" name="confirm-password" placeholder="Confirm Password" 
                      
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
                  <a href="#plan" className="login100-form-btn" aria-controls="plan" role="tab" data-toggle="tab" onClick={() => this.props.handleClickStepper('plan')}>
                      Back
                  </a>
                  </div>
                  <div className="column">
                  <a href="#payment" className="login100-form-btn" aria-controls="payment" role="tab" data-toggle="tab" onClick={() => this.props.handleClickStepper('paymentMode')}>
                      Next
                  </a>
                  </div>
                 </div>
                 </p>
                </div>
                {/* /Login Form */}
                {/* <Input size='small' fluid placeholder='First Name'/>

                <Input size='small' fluid placeholder='Last Name' style={{marginTop:'10px'}}/>

                <Input size='small' fluid placeholder='Email Address' style={{marginTop:'10px'}}/>

                <Input size='small' fluid placeholder='Password' style={{marginTop:'10px'}}/>

                <Input size='small' fluid placeholder='Confirm Password' style={{marginTop:'10px'}}/> */}

               </div>
            </div>
           </div>
          </div>
    )
  }
}

export default (RegisterDetails);
