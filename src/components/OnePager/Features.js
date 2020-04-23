import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Slider from "react-slick";

class Features extends React.Component {

	componentDidMount(){
		AOS.init({
			easing: "ease-out",
			duration: 3000,
		})
	}

  render (){
	var settings = {
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		prevArrow: <div className='slick-custom is-prev'><i className='fa fa-chevron-left'></i></div>,
		nextArrow: <div className='slick-custom is-next'><i className='fa fa-chevron-right'></i></div>,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	};
	
    return (
      <div className="features">
        <div id="features" className="section md-padding">
            <div className="container">

                {/* <div className="row"> */}

                    <div className="section-header text-center">
                        <h2 className="title">Take advantage of these amazing features</h2>
                    </div>
                    <Slider {...settings}>
                        <div className="team-padding">
                            <div className="team">
                                <div className="team-img">
                                    <img className="img-responsive" src="images/Dedicated-Designer.png" alt="" />
                                </div>
                                <div className="team-content">
                                    <h3>Dedicated Designers</h3>
                                    <p>Professional graphic designers ready when you need them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-padding">
                            <div className="team">
                                <div className="team-img">
                                    <img className="img-responsive" src="images/Flat-Monthly-Rate.png" alt="" />
                                </div>
                                <div className="team-content">
                                <h3>Flat Monthly Rate</h3>
                                        <p>Professional graphic designers ready when you need them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-padding" style={{paddingLeft: "10px !important", paddingRight: "10px !important"}}>
                            <div className="team">
                                <div className="team-img">
                                    <img className="img-responsive" src="images/Unlimited-Revisions.png" alt="" />
                                </div>
                                <div className="team-content">
                                    <h3>Unlimited Revisions</h3>
                                    <p>Professional graphic designers ready when you need them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-padding">
                            <div className="team">
                                <div className="team-img">
                                    <img className="img-responsive" src="images/No-Contracts.png" alt="" />
                                </div>
                                <div className="team-content">
                                    <h3>No Contracts</h3>
                                    <p>Professional graphic designers ready when you need them.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                {/* </div> */}
            </div>
        </div>
	</div>
    );
  }
}

export default Features;
