// import React, {createContext,useState} from 'react';

// const LayoutContext = createContext({});

// const BooksProvider  = ({children}) => {
//     const [ banner, setBanner] = useState();
//     const [ nextInList,setNextInList ] = useState();
    
//     const banners = {
//         home:{
//             src:'header/home-banner.jpg',title:t("homeTitle").toUpperCase(),color:''
//         },

//     }
//     const changeBook = (book) =>{
//         setStandInLineBook(book);
//     }
    
//      return (
//         <LayoutContext.Provider value={{ standInLineBook,changeBook,setNextInList,nextInList }}>
//             {children}
//         </LayoutContext.Provider>
//     )
// }

// export default LayoutContext;

// export {BooksProvider};