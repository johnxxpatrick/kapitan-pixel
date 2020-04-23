import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Slider from "react-slick";

class Footer extends React.Component {

    componentDidMount(){
        AOS.init({
            easing: "ease-out",
            duration: 3000,
        })
    }
    
  render (){
	
    return (
      <div className="App">
	
        <footer id="footer" className="sm-padding bg-red">

            <div className="container">

                {/* <div className="row"> */}

                    <div className="col-md-6">

                        <div className="footer-logo">
                            <a href="index.html"><img className="logo" src="images/Kapitan-Pixel-Logo-v2.png" alt="logo" /></a>
                        </div>

                        <div className="footer-copyright white-text">
                            <p>© 2019 Kapitan Pixel. All Rights Reserved.</p>
                        </div>

                        <ul className="footer-follow">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        </ul>
                        

                    </div>
                    <div className="col-md-2">

                        <div className="footer-links">
                            <p><b>Company</b></p>
                            <p>About</p>
                            <p>Security & Privacy</p>
                            <p>Careers</p>
                            <p>Blog</p>
                        </div>

                    </div>
                    <div className="col-md-2">

                        <div className="footer-links">
                            <p><b>About Us</b></p>
                            <p>Stories</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Careers</p>
                        </div>

                    </div>
                    <div className="col-md-2">

                        <div className="footer-links">
                            <p><b>FAQ</b></p>
                            <p>Help Center</p>
                            <p>Enterprise</p>
                            <p>Terms of Service</p>
                            <p>Privacy</p>
                        </div>

                    </div>
                {/* </div> */}

            </div>
        </footer>
	</div>
    );
  }
}

export default Footer;
