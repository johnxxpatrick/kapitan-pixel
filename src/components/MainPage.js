import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../App.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import Slider from "react-slick";
import Header from './OnePager/Header'
import Features from './OnePager/Features'
import WhyKapitanPixel from './OnePager/WhyKapitanPixel'
import OurWorks from './OnePager/OurWorks'
import HowItWorks from './OnePager/HowItWorks'
import Designer from './OnePager/Designer'
import Footer from './OnePager/Footer'

class MainPage extends React.Component {

  

  render (){
	
    return (
      <div className="main">
		<Header />
		<Features />
		<WhyKapitanPixel />
		<OurWorks />
		<HowItWorks />
		<Designer />
		<Footer />
		<div id="backtotop"><a href="#" /></div>
		<div id="preloader">
			<div className="preloader">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
    );
  }
}

export default MainPage;
