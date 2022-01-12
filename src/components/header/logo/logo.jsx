import styles from './logo.module.scss';
import ReactLogo from './excelti.svg';


const Logo = () => {
    return(
      <div className={styles.container}>
        <a href="/">
        
          <img className={styles.logo} alt= 'logo' src={ReactLogo}/>
        </a>
      </div>);
}

export default Logo;