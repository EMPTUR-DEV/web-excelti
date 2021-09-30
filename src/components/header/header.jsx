import React, { useContext } from 'react';
import Flags from './flags/flags';
import styles from'./header.module.scss'
import Logo from './logo/logo';
import Banner from './banner/banner';
import NavBar from './nav-bar/nav-bar';

const Header =()=>{


return (
    <div className={styles.headerContainer}>
        <Logo className={styles.logo}/>
        

        <div className={styles.menuContainer}>
            <NavBar />
            <Flags/>
        
        </div>
        
    </div>
    );
};

export default Header;