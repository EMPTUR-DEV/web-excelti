import styles from './logo.module.scss';

const Logo = () => {
    return(
      <a href="/" className={styles.container}>
        <img className={styles.logo} src="header/logo.jpg"/>
      </a>);
}

export default Logo;