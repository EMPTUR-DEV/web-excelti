import React, {createContext,useState} from 'react';

const BooksContext = createContext({});

const BooksProvider  = ({children}) => {
    const [ standInLineBook, setStandInLineBook] = useState();
    const [ nextInList,setNextInList ] = useState();
    
    const changeBook = (book) =>{
        setStandInLineBook(book);
    }
    
     return (
        <BooksContext.Provider value={{ standInLineBook,changeBook,setNextInList,nextInList }}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContext;

export {BooksProvider};