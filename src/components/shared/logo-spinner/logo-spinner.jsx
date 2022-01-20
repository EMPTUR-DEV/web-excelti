 import styles from './logo-spinner.module.scss'

const LogoSpinner = () => {
    return(
        <div className={styles.preloader}>
            <div className={styles.loader}/>
                <img className={styles.image} src="/miniLogo1.png"/>
        </div>
    );
}

export default LogoSpinner;