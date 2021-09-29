import styles from './logo.module.scss';

const Logo = () => {
    return(
      <a href="/">
        <img className={styles.logo} alt= 'logo' src="header/logo.jpg"/>

      </a>);
}

export default Logo;