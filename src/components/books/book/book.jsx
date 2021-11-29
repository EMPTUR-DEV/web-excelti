import styles from './book.module.scss'

const Book=({ name,url })=>{

    return(<div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} alt={name} src={url}/>
            </div>
            <div className={styles.textContainer}>
                <span className={styles.name}>{name}</span>
            </div>
        </div>);
}
export default Book;