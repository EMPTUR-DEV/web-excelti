import styles from './books.module.scss';
import Book from './book/book';

const Books=({ title,books })=>{

    return(<div>
        <h3>{title}</h3>
        <div className={styles.listContainer}>
                <div className={styles.booksTrack}>
                    {
                        books.map(x=>{
                            const { name,url } = x;
                            return <Book name={name} url={url}/>
                        })
                    }
                </div>
            </div>
        </div>);
}
export default Books;