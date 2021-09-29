import React, { useContext } from 'react';
import Flags from './flags/flags';
import styles from'./header.module.scss'
import Logo from './logo/logo';
import Banner from './banner/banner';
import NavBar from './nav-bar/nav-bar';

const Header =()=>{


return (
    <div className={styles.headerContainer}>
        <Logo/>
        <NavBar/>
        <Flags/>
        <Banner src={'header/home-banner.jpg'}/>
    </div>
    );
};

export default Header;