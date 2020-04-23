import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';

import RegisterDetails from './RegisterDetails'
import RegisterPlan from './RegisterPlan'
import RegisterPayment from './RegisterPayment'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      isLoading: false,
      plan: 'active',
      details: '',
      paymentMode: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClickStepper(currentTab){
		if(currentTab == 'plan'){
      this.setState({ 
        plan: 'active',
        details: '',
        paymentMode: '' 
      });
    }else if(currentTab == 'details'){
      this.setState({ 
        plan: 'visited',
        details: 'active',
        paymentMode: '' 
      });
    }else{
      this.setState({ 
        plan: 'visited',
        details: 'visited',
        paymentMode: 'active' 
      });
    }
	}
  
  render() {
    const { firstName, lastName, email, password,
      confirmPassword, errors, isLoading, plan, details, paymentMode } = this.state;

    return (
      // <div className="SignUp">
      //   <header id="home">
      //     <div className="home-wrapper">
      //       <div className="container hero-shadow">
      //         <div className="row">
      //               <Step.Group widths={3} attached='top'>
      //                 <Step>
      //                   <Icon name='truck' />
      //                   <Step.Content>
      //                     <Step.Title>Shipping</Step.Title>
      //                   </Step.Content>
      //                 </Step>
      //                 <Step active>
      //                   <Icon name='credit card' />
      //                   <Step.Content>
      //                     <Step.Title>Billing</Step.Title>
      //                   </Step.Content>
      //                 </Step>
      //                 <Step disabled>
      //                   <Icon name='info' />
      //                   <Step.Content>
      //                     <Step.Title>Confirm Order</Step.Title>
      //                   </Step.Content>
      //                 </Step>
      //               </Step.Group>
      //               <Segment attached>
      //                 <Image src='/images/wireframe/paragraph.png' />
      //               </Segment>
      //         </div>
      //       </div>
      //     </div>
      //   </header>
      // </div>
      <header id="home">
        <nav id="nav" className="navbar nav-transparent">
			<div className="container">
				<div className="navbar-header">
					<div className="navbar-brand">
						<a href="index.html">
							<img className="logo" src="images/Kapitan-Pixel-Logo-v2.png" alt="logo" />
							<img className="logo-alt" src="images/Kapitan-Pixel-Logo-v2.png" alt="logo" />
						</a>
					</div>

					<button type="button" className="navbar-toggle collapsed nav-collapse" data-toggle="collapse" data-target=".navbar-collapse">
                		<span></span>
					</button>
				</div>

				<ul className="nav-main nav navbar-nav navbar-right collapse navbar-collapse">
						<li className="center-btn">
                            <div class="sgn-up">
                                <a href="/login" className="sgn-up-button mar-space">Login</a>
                            </div>
                        </li>
						{/* <li className="center-btn"><button className="main-btn outline-btn">Sign-Up</button></li> */}
						{/* <li className="center-btn"><div className="pixel3 sign-up"><div className="pixel-bg">Sign-Up</div></div></li> */}
				</ul>

			</div>
		</nav>
    <div id="features" className="section" style={{paddingTop: "20px"}}>
      <section className="design-process-section" id="process-tab">
        <div className="container">
          <div className="row">
            <div className="col-xs-12"> 
              {/* design process steps*/} 
              {/* Nav tabs */}
              {/* <div className="section-header text-center">
                <h1 className="title">Kapitan Pixel Sign-Up</h1>
                <p>Ready to get started? Register a new account; it takes less than a minute.</p>
              </div> */}
              <h1 className="text-center">Kapitan Pixel Sign-Up</h1>
              <p className="text-center">Ready to get started? Register a new account; it takes less than a minute.</p>
              <ul className="nav nav-tabs process-model more-icon-preocess center-item is-hidden-mobile" role="tablist">
                <li role="presentation" className={plan}><a href="#plan" aria-controls="plan" role="tab" data-toggle="tab" onClick={() => this.handleClickStepper('plan')}><i className="fa fa-file-text-o" aria-hidden="true" />
                    <p>Select Plan</p>
                    
                  </a></li>
                <li role="presentation" className={details}><a href="#details" aria-controls="details" role="tab" data-toggle="tab" onClick={() => this.handleClickStepper('details')}><i className="fa fa fa-list-alt" aria-hidden="true" />
                    <p>Register</p>
                  </a></li>
                <li role="presentation" className={paymentMode}><a href="#payment" aria-controls="payment" role="tab" data-toggle="tab" onClick={() => this.handleClickStepper('paymentMode')}><i className="fa fa-credit-card" aria-hidden="true" />
                    <p>Payment Mode</p>
                  </a></li>
              </ul>
              {/* end design process steps*/} 
              {/* Tab panes */}
              <div className="tab-content is-offset-1">
                <div role="tabpanel" className="tab-pane active" id="plan">
                  <div className="design-process-content">
                    <RegisterPlan handleClickStepper={this.handleClickStepper.bind(this)}/>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="details">
                  <div className="design-process-content" >
                    <RegisterDetails handleClickStepper={this.handleClickStepper.bind(this)}/>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="payment">
                  <div className="design-process-content">
                    <RegisterPayment handleClickStepper={this.handleClickStepper.bind(this)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        </div>
        </header>
    )
  }
}

export default (RegisterForm);
