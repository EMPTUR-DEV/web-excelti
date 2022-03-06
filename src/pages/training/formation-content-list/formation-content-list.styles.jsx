import styled from "styled-components";

export const FormationContentListContainer = styled.div `
    --ul-width : 100%;
    --li-width: 100%;
    --ul-height: 400px;
    --li-height: 80px;
    position: relative;

    height: auto;
    /* height:${({itemActive})=> itemActive ? 'var(--ul-height)' : 'var(--li-height)'  } ; */
    width:${({itemActive})=> itemActive ? 'var(--ul-width)' : 'var(--li-width)'  } ;
    margin:${({itemActive})=> itemActive ? '0 0 100px 0' : '0'  } ;
    
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
    box-shadow: 0 0 10px #aaa ;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; 
    

    @media screen and (max-width: 1150px){
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr  ;
    }
    @media screen and (max-width: 500px){
        display: flex;
        &::before,&::after{
            content: '';
            position: absolute;
            height: 50px;
            color: white;

            border-bottom: 25px solid white;
            border-top: 25px solid white;
            top:0px;
            filter: drop-shadow(0 0 10px #444);
        }
        &::before{
            right: 0%;
            border-left:15px solid transparent;
            display: ${({arrowActiveEnd})=>arrowActiveEnd? 'flex' : 'none' };
        }
        &::after{
            border-right:15px solid transparent;
            left: 0%;
            display: ${({arrowActiveStart})=>arrowActiveStart? 'flex' : 'none' };
        }

    }

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