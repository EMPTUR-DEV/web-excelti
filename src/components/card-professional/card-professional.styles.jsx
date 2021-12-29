import styled from 'styled-components'

export const CardProfessionalContainer =  styled.div`
    margin: auto;
    
    width:600px;
    margin-top:20px;
    background-color:white;
    display:grid;
    grid-template-columns: 0fr  4fr;
    border-radius:10px;
    box-shadow:  0 0 20px 2px #CCC;
`
export const ProfessionalImageContainer =  styled.div`
    position:relative;
    grid-column: 1;
    grid-row: 1;
    
    
    /* &:after{
        content:'';
        position: absolute;
        right:0;
        
        top:2%;
        height: 96%;
        border-right: 1px grey solid;
        box-shadow: 2px 0px 3px 0px grey;
    } */
`
export const ProfessionalDataContainer =  styled.div`
    display:flex;
    justify-content:space-evenly;  
       
    grid-column: 2;
    grid-row: 1;
    flex-direction:column;
`

export const ProfessionalImage = styled.div`
    width: 150px;
    border-radius:20px; 
    margin:auto;
    position:absolute;
    left:-75px;
    border-radius:100%;
    margin-top:40px;
    justify-content:flex-start;
    
    
    
    &:after{
        content:'';
        position: absolute;
        width: 150px;
        height:150px;
        left:0px;
        border-radius:100%;
        z-index:-10;
        box-shadow:  0 0 20px 2px #CCC;
    }
    img{
        
        z-index:100;
        border-radius:100%; 
        object-fit: cover;
        width: 150px;
        height:150px;
        
    }
` 

export const NameTitle = styled.h3`
    color: black;
`
export const ProfessionTitle = styled.h4`
    font-weight:400;
    color: grey;
`
export const ContactBox = styled.div`
    width: 100%;
`
export const ProfessionalSocialNetworksContainer = styled.div`
    width: 80%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr  1fr;
    align-self:center;
    column-gap:10px;
    margin: 10px 10% 15px 10%;
    
`
export const SocialIconContainer = styled.div`
    align-self:center;
    & > *{
        width:20px;
        height:20px;
    }
`