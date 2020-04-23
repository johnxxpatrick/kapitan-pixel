import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import ProjectList from '../ProjectList';
import ProjectInformation from '../ProjectInformation';
import { Grid, Segment, Modal, Icon, Button, Divider, Label, Input, Form, TextArea } from 'semantic-ui-react'
import ReactImageAnnotate from "react-image-annotate"


class ProjectDraft extends React.Component {
  
  state ={
		imgAnnotateDetails: {}
	}

	saveImgAnnotate = (value) => {
		this.setState({
			imgAnnotateDetails: value
		})
	}

  render (){
    
    return (
      <div>
        <Segment color='red'>
          <Label size='big'><b>Project Draft</b></Label>
            <Divider clearing />
          <div id="how-it-works" className="section md-padding">
            <div className="container">
              <ReactImageAnnotate
                selectedImage="images/OurWorks/Flyers.jpg"
                taskDescription="# Draw region around each animal."
                images={[{ src: "images/OurWorks/Flyers.jpg", name: "Image 1" }, { src: "images/OurWorks/Invitation.jpg", name: "Image 1" }]}
                regionClsList={["Book1"]}
                regionTagList={["Book Cover"]}
                showTags
                onExit={(params) => this.saveImgAnnotate(params)}
              />
            </div>
          </div>  
        </Segment> 
      </div>
    );
  }
}

export default ProjectDraft;
