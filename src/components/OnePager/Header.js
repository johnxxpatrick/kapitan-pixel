import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

class Header extends React.Component {

	componentDidMount(){
		AOS.init({
			easing: "ease-out",
			duration: 3000,
		})
	}

  render (){
	
    return (
      <div className="header">
        <header id="home">
            <div className="bg-img" style={{backgroundImage: "url('./images/Pixel-Background-v3.png')"}} data-aos="fade-left">
                <img className="man-flying" src="images/Man-Flying-v5.png" alt="man-flying" data-aos="fade-left"/>
                <div className="overlay"></div>
            </div>
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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How it works</a></li>
                            <li><a href="#our-works">Our Works</a></li>
                            <li><Link to="/login">Login</Link></li>
                            <li className="center-btn">
                                <div class="sgn-up">
                                    <a href="/sign-up" className="sgn-up-button mar-space">Sign-Up</a>
                                </div>
                            </li>
                            {/* <li className="center-btn"><button className="main-btn outline-btn">Sign-Up</button></li> */}
                            {/* <li className="center-btn"><div className="pixel3 sign-up"><div className="pixel-bg">Sign-Up</div></div></li> */}
                    </ul>

                </div>
            </nav>
            <div className="home-wrapper">
                <div className="container">
                    {/* <div className="row"> */}

                        {/* <div className="col-md-5 col-md-offset-1"> */}
                        <div className="col-md-5" style={{paddingLeft: '0'}}>
                            <div className="home-content">
                                <h3>Get your own Designer for Unlimited <br/> Graphic Designs and Flat Monthly Rate </h3>
                                <p>Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula.</p>
                                <div className="home-content-btn">
                                    <div className="pixel3"><div className="pixel-bg" style={{color:"black"}}>Check our works</div></div>
                                    <div className="pixel2"><div className="pixel-bg">Get Started</div></div>
                                </div>
                            </div>
                        </div>

                    {/* </div> */}
                </div>
            </div>
        </header>
	</div>
    );
  }
}

export default Header;
