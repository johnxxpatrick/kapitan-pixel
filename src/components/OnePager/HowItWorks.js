import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Slider from "react-slick";

class HowItWorks extends React.Component {

	state = {
		currentTab: 0,
		data: [
			{ id: "0", title: "1. Submit Project ", subtitle:"Create a new project by simply adding your design details such as name, description, file formats you would like to receive, and any examples you may have.", image: "images/Rush.png"},
			{ id: "1", title: "2. Feedback and Revisions ", subtitle:"Once you receive your initial draft let us know if there are any revisions you need by clicking anywhere on the design to put a feedback comment. Do this as many times as you need.", image: "images/No-More-Rubish.png"},
			{ id: "2", title: "3. Approve and Download ", subtitle:"When you get the design as you had imagined, just click approve and download the source files requested.", image: "images/No-Need-To-Hire-v3.png"}
		]
	};

	componentDidMount(){
		AOS.init({
			easing: "ease-out",
			duration: 3000,
		})
	}

	handleClick(currentTab) {
		this.setState({ currentTab });
	}
  

  render (){
	
    return (
      <div className="App">
	
        <div id="how-it-works" className="section md-padding bg-grey">

        <div className="container">

            {/* <div className="row"> */}

                <div className="section-header text-center">
                    <h2 className="title">3 easy steps on how it works</h2>
                    <p>Checkout our simple and fast workflow</p>
                </div>
                
                <div className="content-wrapper" style={{paddingTop: 0}}>
                    <div className="columns is-vcentered">
                        <div className="column" data-aos-easing="linear">
                            <div className="tab">
                                {this.state.data.map((button, i) => (
                                    <a key={button.id} className={`tablinks ${button.id == this.state.currentTab ? "active" : null}`} onClick={() => this.handleClick(i)}>
                                        <h3>{button.title}<i className="fa fa-caret-right"></i></h3>
                                        <p>{button.subtitle}</p>
                                        {/* {button.id == 1 ?  <p><i>For Transferees/Irregular College students, The School Administrator may be able to evaluate, choose the applicable subjects for the applicant under his/her course level's curriculum.</i></p> : null } */}
                                    </a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="column" data-aos="flip-left">
                            <div className="tabcontent">
                                {this.state.currentTab !== -1 &&
                                <React.Fragment>
                                    <img src={this.state.data[this.state.currentTab].image} alt="" style={{width: "100%", height: "auto"}}/>
                                </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            {/* </div> */}

        </div>

        </div>

	</div>
    );
  }
}

export default HowItWorks;
