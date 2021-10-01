import Flags from './flags/flags';
import styles from'./header.module.scss'
import Logo from './logo/logo';
import NavBar from './nav-bar/nav-bar';

const Header =()=>{


return (
    <div className={styles.headerContainer}>
        <Logo/>
        <Flags/>     
        <NavBar/>
    </div>
    );
};

export default Header;