import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Slider from "react-slick";

class OurWorks extends React.Component {

	

	componentDidMount(){
		AOS.init({
			easing: "ease-out",
			duration: 3000,
		})
	}


  render (){
	
    return (
      <div className="why-kapitan-pixel">
        <div id="why-kapitan-pixel" className="section md-padding bg-grey">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="title white-text">Why Kapitan Pixel</h2>
                    <p className="white-text">Our Mission is to provide solutions</p>
                </div>
                <div className="content-wrapper">
                    <div className="columns">
                        <div className="column">
                            <div className="section-feature-description has-text-right"> 
                                <h3  className="white-text">Never worry about "rubbish" design work again.</h3>
                                <p  className="white-text">"Every design feels like it was made specially for me. I never have to worry about crap design work. No Templates, no clip-arts, no messing around. Fianlly, I don't have to touch Photoshop again."</p>
                            </div>
                        </div>
                        <div className="column">
                            <img src="images/No-More-Rubish.png" alt="" style={{width: "100%", height: "auto"}}/>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="columns">
                        <div className="column">
                            <img src="images/No-Need-To-Hire-v3.png" alt="" style={{width: "100%", height: "auto"}}/>
                        </div>
                        <div className="column">
                            <div className="section-feature-description has-text-right"> 
                                <h3  className="white-text">Now you don't need to hire a designer, we'll give you a dedicated designer just for you.</h3>
                                <p  className="white-text">"It costs a friction of what freelancers and agencies were charging me. I came for the unlimited graphic design, but I stayed for the experience. It's amazing!"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="columns">
                        <div className="column">
                            <div className="section-feature-description has-text-right"> 
                                <h3 className="white-text">We'll rush your deadlines. One to two days delivery time.</h3>
                                <p className="white-text">"I thought you were just another unlimited design service. Boy, I was wrong! I get my designs in every format I need and all with  just one email. It's unlimited, yet personal."</p>
                            </div>
                        </div>
                        <div className="column">
                            <img src="images/Rush.png" alt="" style={{width: "100%", height: "auto"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
    );
  }
}

export default OurWorks;
