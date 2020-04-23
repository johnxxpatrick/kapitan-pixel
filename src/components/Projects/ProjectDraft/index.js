import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import ProjectDraft from './ProjectDraft';
import ProjectDraftInfo from './ProjectDraftInfo';
import { Grid, Segment, Modal, Icon, Button, Divider, Label, Input, Form, TextArea } from 'semantic-ui-react'
import ReactImageAnnotate from "react-image-annotate"


class ProjectDraftMain extends React.Component {
  
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
        <div className="proj-container">	
            <div className="tab-wrap">
                <input type="radio" id="tab1" name="tabGroup1" className="proj-tab" defaultChecked />
                <label htmlFor="tab1">Project Information</label>
                <input type="radio" id="tab2" name="tabGroup1" className="proj-tab" />
                <label htmlFor="tab2">Draft</label>
              
                <div className="tab__content">
                  <ProjectDraftInfo />
                </div>
                <div className="tab__content">
                  <ProjectDraft />
                </div>
            </div>
        </div>
    );
  }
}

export default ProjectDraftMain;
