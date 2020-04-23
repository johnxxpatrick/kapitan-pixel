import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../../assets/icon-logo';
import KPLogo from '../../assets/Kapitan-Pixel-Logo.png';

const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginRight: 32,
        marginTop: -13
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#fff',
        opacity: 0.7,
        marginLeft: 12
    }
});

function LogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            {/* <Logo /> */}
            <img className="logo" src="./images/Kapitan-Pixel-Logo-v2.png" alt="logo" />
            {/* <span className={css(styles.title)}>Kapitan Pixel</span> */}
        </Row>
    );
}

export default LogoComponent;
