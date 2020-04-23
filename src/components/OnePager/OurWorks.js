import React from 'react';

class OurWorks extends React.Component {
  render (){
    return (

	<div id="our-works" className="section md-padding">
		<div className="container">
			<div className="section-header text-center">
				<h2 className="title">Our Works</h2>
				<p>We can create all types of graphic design. <br /> From logos, brochures, flyers, web pages, t-shirts, illustrations to much more. Take a look at some of our work!</p>
			</div>

			<div className="gallery-wrap">
				<div className="gallery-wrap-item item-1" style={{backgroundImage: "url('images/OurWorks/Flyers.jpg')"}}>
				</div>

				<div className="gallery-wrap-item item-2" style={{backgroundImage: "url('images/OurWorks/Invitation.jpg')"}}>
				</div>

				<div className="gallery-wrap-item item-3" style={{backgroundImage: "url('images/OurWorks/Social-Media.jpg')"}}>
				</div>

				<div className="gallery-wrap-item item-4" style={{backgroundImage: "url('images/OurWorks/Menu.jpg')"}}>
				</div>
			</div>
		</div>
	</div>

    );
  }
}

export default OurWorks;
