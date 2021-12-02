import styled from "styled-components"



export const EnterButtonContainer = styled.button`
    width: 150px;
    height: 40px;
    font: 13px;
    color:white;
    background-color: ${(color)=> color? color.color: '#338'} ;
    display:flex;
    margin:auto;
    margin-top:50px;
    border:none;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px #226;
    transition: all 0.1 ;
    &:hover{
        background-color:var(--blue);
    }
    &:active{
        
        box-shadow: 0 0 0 0 black;
    }
    span{
        margin:auto;
    }
`
