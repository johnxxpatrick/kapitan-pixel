import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import axios from 'axios';
import { Icon, Step, Segment, Image, Grid, Dropdown } from 'semantic-ui-react'
// import { Button, Form, Grid, Header, Image, Message, Segment,
//  Loader } from 'semantic-ui-react'

var api = require('../../api/api.js').webApi;

class RegisterPlan extends Component {

   state = {
      pricingPlanList: [],
      selectedPricingPlan: {},
      currVal: ''
   }

   componentWillMount = () => {
      this.getPricingPlan();
    };

    
    getPricingPlan = () => {
      var url = api + 'api/PricingPlan';
      axios
        .get(url)
        .then(res => {
          this.setState({
            pricingPlanList: res.data.data,
            currVal: res.data.data[0].npricing_plan_name
          });
         //  console.log(res)
        })
        .catch(err => {
         //  console.log(err)
        });
    };

    pricingPlanOnChangeDropdown = (e, {value})=> {

      this.setState({
         currVal: value
       });
       
    }
 
    
  render() {
   var { pricingPlanList, currVal } = this.state
  
   var filteredPlan =  pricingPlanList.filter(item => item.npricing_plan_name === currVal);
   
   var selectedPlan = filteredPlan.map(item =>{
      
      return (
         <ul>
            <li>{item.npricing_plan_name}</li>
            <li>{item.ndiscounted_amount}</li>
            <li>{item.ntotal_amount}</li>
         </ul>
      )
   })

   var pricingPlanOptions = pricingPlanList.map( item =>{
      var data = {
          text: item.npricing_plan_name,
          value: item.npricing_plan_name,
          key: item.npricing_id,
        }

      return data
   })

   
   
    return (
      <div className="hero-body-login center-item">
         <div className="container-login">
         <div className="columns-login">
         <div className="column is-8 is-offset-2">
         {/* <Segment> */}

            <div className="column is-8 is-offset-2">
               <Dropdown
                  fluid
                  selection
                  options={pricingPlanOptions}
                  placeholder='Select Pricing Plan'
                  onChange={this.pricingPlanOnChangeDropdown.bind(this)} 
                  value={currVal}
               />
            </div>

            <div className="monthly-activate">
               { selectedPlan }
            </div>
            {/* </Segment> */}
            {/* Next */}
            <p className="control login">
               <div className="container-login100-form-btn">
                  <a href="#details" className="login100-form-btn" aria-controls="details" role="tab" data-toggle="tab" onClick={() => this.props.handleClickStepper('details')}>
                     Next
                  </a>
               </div>
            </p>
         </div>
         </div>
         </div>
      </div>
      )
   }
}

export default (RegisterPlan);
