import styled from "styled-components";

export const FormationContentListContainer = styled.div `
    --ul-width : 100%;
    --li-width: 100%;
    --ul-height: 400px;
    --li-height: 100px;

    height: auto;
    /* height:${({itemActive})=> itemActive ? 'var(--ul-height)' : 'var(--li-height)'  } ; */
    width:${({itemActive})=> itemActive ? 'var(--ul-width)' : 'var(--li-width)'  } ;
    margin:${({itemActive})=> itemActive ? '0 0 calc(var(--ul-height) - 150px) 0' : '0'  } ;
    
    background-color: white;

    position:relative;
    overflow-x:visible;
    align-items: center;
    transition: height ease-in 0.4s;
    transition: width ease-in 0.4s;
    
    @media screen and (max-width: 450px){
        
        --li-height: 100px;
        
        margin: 0 50px 0 0;
        height:auto;
        
        transition: height ease-in 0.4s;

    }
`
export const FormationList = styled.ul `
    list-style:none;
    
    width:100%;    
    display:flex;
    flex-direction:row;
    overflow-x: auto;
    margin: 0;
    padding: 0;
    
    scroll-snap-type: x mandatory;
    
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; 
    &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
    }

    & > li{
        scroll-snap-align: start;
    }
    
    /* @media screen and (max-width: 400px){
        

    } */
`

export const ItemContent = styled.li `
    width:var(--li-width);
    height:var(--li-height);
    
    display: flex;
    align-items:center; 
    
    box-shadow:${({itemActive}) => itemActive ? '-3px 2 px 3px 0px #AAA' : 'none'};
    background-color: var(--blue);   
    min-width: 200px;      
    
    cursor:pointer;
    &:hover{
        background-color: var(--greenLeaf);
    }

    
`

export const FormationButton = styled.div `
    
    height:75px;
    margin: auto;

    display: flex;
    align-items:center;
    & h4{
        margin: auto;
        display: flex;
        color: white;
    }
`