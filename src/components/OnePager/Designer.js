import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import Slider from "react-slick";

class Designer extends React.Component {


  render (){
	
    return (
      <div className="App">
        <div id="designer" className="section md-padding">
          <div className="container">
            {/* <div className="row"> */}

                <div className="section-header text-center">
                    <h1 className="title-designer">Get your own Designer now!</h1>
                </div>
                <div className="section-header text-center">
                    <div className="pixel2"><div className="pixel-bg">Get Started</div></div>
                </div>
            {/* </div> */}
        </div>
      </div>
    </div>
    );
  }
}

export default Designer;
