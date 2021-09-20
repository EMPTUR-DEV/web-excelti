import React from 'react';
import Flags from './flags/flags';
import styles from'./header.module.scss'
import Logo from './logo/logo';
import Banner from './banner/banner';


const Header =()=>{

return (
<div className={styles.headerContainer}>
        <Logo/>
        <Flags/>
    <Banner src={'header/home-banner.jpg'}/>

</div>
);

};

export default Header;