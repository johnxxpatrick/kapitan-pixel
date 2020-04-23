import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };
  }

  componentDidMount() {
   
  }

  componentWillReceiveProps(nextProps) {

  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, email, password, isLoading } = this.state;

    return (
      <div className="login-wrapper columns-login is-gapless">
      {/* Image section (hidden on mobile) */}
      <div className="column-login login-column is-8 is-hidden-mobile hero-banner">
         <div className="login-img hero-login is-fullheight has-background-image" data-background="https://via.placeholder.com/1600x1064" data-demo-background="img/Pixel-Background-v3.png">
          <div className="hero-footer">
           <p className="has-text-centered" />
          </div>
         </div>
      </div>
      {/* /Image section */}
      {/* Form section */}
      <div className="hero-shadow-login column-login is-4">
         <div className="hero-login hero-shadow is-fullheight">
          <div className="hero-heading-login">
           <div className="center-item section has-text-centered">
            <Link to="/"><img className="top-logo" src="images/Kapitan-Pixel-Logo-v2.png" alt="logo" /></Link>
           </div>
           <div className="center-item no-account-link has-text-centered">
            <Link to="/sign-up" className="txt2">
            <i className="fa fa-question-circle-o m-l-5" aria-hidden="true" />
              &nbsp; I do not have an account yet
            </Link>
           </div>
          </div>
          <div className="hero-body-login">
           <div className="container-login">
            <div className="columns-login">
               <div className="column is-8 is-offset-2">
              <form>
                {/* Login Form */}
                <div id="signin-form" className="login-form animated preFadeInLeft fadeInLeft">
                 {/* Input */}
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="Username is required">
                     <input className="input100" type="text" name="username" placeholder="Username" 
                      value={this.state.username}
                      onChange={this.handleChange}/>
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                     <i className="fa fa-user" aria-hidden="true" />
                     </span>
                  </div>
                 </div>
                 {/* Input */}
                 <div className="field pb-10">
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                     <input className="input100" type="password" name="password" placeholder="Password" 
                       value={this.state.password}
                             onChange={this.handleChange}
                     />
                     <span className="focus-input100" />
                     <span className="symbol-input100">
                     <i className="fa fa-lock" aria-hidden="true" />
                     </span>
                  </div>
                 </div>
                 {/* Submit */}
                 <p className="control login">
                 <div className="container-login100-form-btn">
                  <div className="column">
                 <Link to="/admin"> 

                    <a href="#" className="login100-form-btn" aria-controls="login">
                        Login
                    </a>
                  </Link>
                    </div>
                 </div>
                 {/* <div className="column">
                  <a href="#" className="login100-form-btn" aria-controls="login">
                      Login
                  </a>
                  </div> */}
                 </p>
                </div>
                </form>
                {/* /Login Form */}
                {/* Toggles */}
                <div id="recover" className="section forgot-password animated preFadeInLeft fadeInLeft">
                 <div className="text-center p-t-12" style={{marginTop:"20px"}}>
                  <span className="txt1">
                  Forgot &nbsp;
                  </span>
                  <a className="txt2" href="#">
                  Username / Password 
                  </a>
                  &nbsp; ?
                 </div>
                </div>
                {/* /Toggles */}
               </div>
            </div>
           </div>
          </div>
         </div>
      </div>
      {/* /Form section */}
     </div>
    )
  }
}

export default (LoginForm);
