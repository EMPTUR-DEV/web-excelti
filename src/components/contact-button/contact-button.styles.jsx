import styled, {keyframes} from "styled-components";


const pulseButton = (range) => keyframes` 
    
    0% {
        -moz-box-shadow: 0 0 0 0 rgb(18,134,193);
        box-shadow: 0 0 0 0 rgb(18,134,193);
        
    }
    40% {
        -moz-box-shadow: 0 0 0 ${range} rgb(18,134,193,0);
        box-shadow: 0 0 0 ${range} rgb(18,134,193,0);
        
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgb(18,134,193,0);
        box-shadow: 0 0 0 0 rgb(18,134,193,0);
    }
`

export const ContactButtonContainer = styled.div`

    ${({active})=>active ? 
    `width: 70%;
    height: 80vh;
    background-color: black;
    `
    :
    `width: 200px;
    height: 50px;
    background-color: none;
    `
    }
    
    z-index: 1000;
    position: fixed;
    bottom: 20px;
    left: 20px;
    border-radius: 15px;
    overflow: ${({active})=>active ? 'visible':'hidden'} ;

    &:hover{
        
        animation: ${pulseButton('10px') }  2s infinite;
    }
` 

export const  Button  =  styled.button`
    background-color: rgb(68,169,37);
    
    ${({active})=>active ?`
        width: 100%;
        height: 50px;
    `:
        `width: 200px;
        height: 50px;`
    }
    border: none;
    border-radius: 15px;
    box-shadow: none;
    cursor: pointer;
    &:hover{
        background-color: rgb(18,134,193); 
    }
    & span{
        color: white;
        font-weight: bold;
        font-size: 16px;
    }
`

export const ContactFormContainer = styled.div`
    position: absolute;
    left:20vw;
    bottom: 20vh;
`