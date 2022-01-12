import styles from './logo.module.scss';

const Logo = () => {
    return(
      <div className={styles.container}>
        <a href="/">
          <img className={styles.logo} alt= 'logo' src="header/logoModerno.png"/>
        </a>
      </div>);
}

export default Logo;