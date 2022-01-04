 import styles from './loader.module.scss'

const Loader = () => {
    return(
        <div className={styles.loadingPage}>
            <div className={styles.square}>
                <span></span> 
                <span></span>
                <span></span>

                <span></span>
                <span></span>
                <span></span>

                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Loader;