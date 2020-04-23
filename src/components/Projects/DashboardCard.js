import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

class DashboardCard extends React.Component {

  render (){
    console.log("dc: ", this.props)
    return (
        <section className="statis text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="box bg-primary">
                  <i className="fa fa-eye" />
                  <h3 className="white-text">5,154</h3>
                  <p className="lead">Total Projects</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="box warning">
                  <i className="fa fa-hourglass-half" />
                  <h3 className="white-text">5,154</h3>
                  <p className="lead">Pending Projects</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="box success">
                  <i className="fa fa-check-circle-o" />
                  <h3 className="white-text">5,154</h3>
                  <p className="lead">Completed Projects</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="box danger">
                  <i className="fa fa-ban" />
                  <h3 className="white-text">245</h3>
                  <p className="lead">Cancelled Projects</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="box gry">
                  <i className="fa fa-hand-paper-o" />
                  <h3 className="white-text">245</h3>
                  <p className="lead">On-Hold</p>
                </div>
              </div>
              
            </div>
          </div>
      </section>
    );
  }
}

export default DashboardCard;
