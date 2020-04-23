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
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../../assets/icon-overview.js';
import IconTickets from '../../assets/icon-tickets.js';
import IconIdeas from '../../assets/icon-ideas.js';
import IconContacts from '../../assets/icon-contacts';
import IconAgents from '../../assets/icon-agents';
import IconArticles from '../../assets/icon-articles';
import IconSettings from '../../assets/icon-settings';
import IconSubscription from '../../assets/icon-subscription';
import IconBurger from '../../assets/icon-burger';

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32,
        height: 'calc(100% - 32px)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {

    state = { expanded: false };

    onItemClicked = (item, route) => {
        // this.props.history.push(route)
        this.setState({ expanded: false });
        return this.props.onChange(item);
        
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }

    render() {
        const { expanded } = this.state;
        let { pathname } = this.props.location
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <LogoComponent />
                        <Column className={css(styles.menuItemList)}>
                            <Link to="/admin">
                                <MenuItemComponent
                                    title="Dashboard" icon={IconOverview}
                                    onClick={() => this.onItemClicked('Dashboard', "/admin")}
                                    active={pathname === '/admin'}/>
                            </Link>
                            <Link to="/projects">
                                <MenuItemComponent
                                    title="Projects" icon={IconIdeas}
                                    onClick={() => this.onItemClicked('Projects', "/projects")}
                                    active={pathname === '/projects'} />
                            </Link>
                            <Link to="/project-draft">
                                <MenuItemComponent
                                    title="Project Draft" icon={IconIdeas}
                                    onClick={() => this.onItemClicked('Project Draft', "/project-draft")}
                                    active={pathname === '/project-draft'} />
                            </Link>
                            <Link to="/subscription-plan">
                                <MenuItemComponent
                                    title="Subscription Plan" icon={IconIdeas}
                                    onClick={() => this.onItemClicked('Subscription Plan', "/subscription-plan")}
                                    active={pathname === '/subscription-plan'} />
                            </Link>
                            <Link to="/user-management">
                                <MenuItemComponent
                                    title="User Management" icon={IconIdeas}
                                    onClick={() => this.onItemClicked('User Management', "/user-management")}
                                    active={pathname === '/user-management'} />
                            </Link>
                            {/* <MenuItemComponent
                                title="Purchase Add-ons" icon={IconSubscription}
                                onClick={() => this.onItemClicked('Purchase Add-ons')}
                                active={pathname === '/add-ons'} />
                            <MenuItemComponent
                                title="Account Overview" icon={IconSubscription}
                                onClick={() => this.onItemClicked('Account Overview')}
                                active={pathname === '/account-overview'} />
                            <MenuItemComponent
                                title="Receipts" icon={IconSubscription}
                                onClick={() => this.onItemClicked('Receipts')}
                                active={pathname === '/receipts'} /> */}
                            <div className={css(styles.separator)}></div>
                            <MenuItemComponent
                                title="Settings" icon={IconSettings}
                                onClick={() => this.onItemClicked('Settings')}
                                active={pathname === '/settings'} />
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;
