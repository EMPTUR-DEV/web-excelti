import React, {createContext,useState} from 'react';

const BooksContext = createContext({});

const BooksProvider  = ({children}) => {
    const [ showMobileMenu, setshowMobileMenu] = useState(false);
   
    const changeShowMobile = (book) =>{
        setshowMobileMenu(book);
    }
    
     return (
        <BooksContext.Provider value={{changeShowMobile,showMobileMenu }}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContext;

export {BooksProvider};