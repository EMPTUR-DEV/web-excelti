import styled from "styled-components";

export const FormationContentListContainer = styled.div`
    --ul-width : 1150px;
    --li-width: 200px;
    --course-title-width:24px;
    background-color: white;
    position:relative;
    height:auto;
    width:${({itemActive})=> itemActive ? 'var(--ul-width)' : 'var(--li-width)'  } ;
    transition: width ease-in 0.4s;
    
    @media screen and (max-width: 900px){
        --ul-width : 800px;
        --li-width: 100px;
        --course-title-width: 20px;
    }
    @media screen and (max-width: 700px){
        --ul-width : 100%;
        --li-width: 100%;
        --ul-height: 300px;
        --li-height: 60px;
        --course-title-width: 20px;
        overflow-x:visible;
        margin:${({itemActive})=> itemActive ? '0 0 calc(var(--ul-height) - 150px) 0' : '0'  } ;
        height:${({itemActive})=> itemActive ? 'var(--ul-height)' : 'var(--li-height)'  } ;
        transition: height ease-in 0.4s;
    }
    @media screen and (max-width: 450px){
        --ul-height: 300px;
        --li-height: 60px;
        margin:${({itemActive})=> itemActive ? '0 0 calc(var(--ul-height) )  0' :'0 0 var(--ul-height) 0'  } ;
        height:${({itemActive})=> itemActive ? 'var(--ul-height)' : 'var(--li-height)'  } ;
        transition: height ease-in 0.4s;

    }
`
export const FormationList =  styled.ul`
    list-style:none;
    height:100%;
    display:flex;
    flex-direction:column;
    @media screen and (max-width: 700px){
        flex-direction:row;
        width:100%;
        justify-content:space-evenly;
    }
    @media screen and (max-width: 400px){
        flex-direction:column;
        height:auto;
    }
`

export const ItemContent = styled.li`
    width:var(--li-width);
    padding:10px 0;
    background-color: var(--blue);   
    align-items:center; 
    cursor:pointer;
    &:hover{
        background-color: var(--green);
    }
    @media screen and (max-width: 700px){        
        height:var(--li-height);
        padding:0;
    }
    @media screen and (max-width: 450px){        
        margin:${({itemActive})=> itemActive ? '0 0 calc(var(--ul-height) )  0' :'0'  } ;
    }
`

export const FormationButton = styled.h2`
    color: white;
    font-size:var(--course-title-width);
    align-items:center;
    
`
export const FormationDescription = styled.div`
    position: absolute;
    left:0;
    top:0;
    min-height: 100%;
    width: calc(var(--ul-width) - var(--li-width));
    background-color:#eee;
    transition: all ease-in 0.4s ;
    left: var(--li-width);

    @media screen and (max-width: 700px){
        left:0;
        top:var(--li-height);
        border-radius:0;
        position:absolute;
        width:100%;
        min-height: var(--ul-height) ;
    }
    @media screen and (max-width: 450px){
        position:relative;
        top:0;
    }

    
`