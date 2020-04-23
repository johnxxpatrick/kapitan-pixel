import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './sidebar/SidebarComponent';
import HeaderComponent from './header/HeaderComponent';
import DashboardCard from './Projects/DashboardCard';
import ProjectView from './Projects/ProjectView';
import CreateProject from './Projects/CreateProject';
import ProjectList from './Projects/ProjectList';
import ProjectDraftMain from './Projects/ProjectDraft/index';
import UserManagementView from './UserManagement/UserManagementView';

import '../style.css';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class AdminPage extends React.Component {

    state = { selectedItem: 'Dashboard' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    renderComponents(){
      var { selectedItem } = this.state
      if (selectedItem == 'Dashboard'){
        return <DashboardCard />

      // }else if(selectedItem == 'Projects'){
      //   return <ProjectView />
      // }
      }else{
        return <ProjectView />
      }
    }

    render() {
        const { selectedItem } = this.state;
        // let { path, url } = useRouteMatch();
        console.log(this.props)
        console.log("adminpage")
        return (
          // <Router>
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} 
                  history={this.props.history} location={this.props.location}/>
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} location={this.props.location}/>
                    <div className={css(styles.content)}>
                        {/* {this.renderComponents()} */}
                        <Switch>
                          <Route exact path={`/admin`} component={DashboardCard} />
                          <Route path={`/projects`} component={ProjectView} />
                          <Route path={`/create-project`} component={CreateProject} />
                          <Route path={`/project-draft`} component={ProjectDraftMain} />
                          <Route path={`/user-management`} component={UserManagementView} />
                        </Switch>
                    </div>
                </Column>
            </Row>
          // </Router>
        );
    }
}

export default AdminPage;
