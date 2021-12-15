import styled from 'styled-components'

export const CardProfessionalContainer =  styled.div`
    margin: auto;
    
    width:800px;
    margin-top:20px;
    background-color:white;
    display:grid;
    grid-template-columns: 2fr  4fr;
    border-radius:10px;
    box-shadow:  0 0 20px 2px #CCC;
`
export const ProfessionalImageContainer =  styled.div`
    position:relative;
    grid-column: 1;
    grid-row: 1;
    &:after{
        content:'';
        position: absolute;
        right:0;
        top:2%;
        height: 96%;
        border-right: 1px grey solid;
        box-shadow: 2px 0px 3px 0px grey;
    }
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
    margin-top:40px;
    justify-content:flex-start;

    img{
        border-radius:20px; 
        object-fit: cover;
        width: 150px;
        height:150px;
        border: solid 1px #444;
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
    width: 140px;
    display:grid;
    grid-template-columns: 1fr  1fr;
    grid-template-rows: 1fr  1fr;
    row-gap:10px;
    
    margin: 10px auto 15px auto;
    
`
export const SocialIconContainer = styled.div`
    align-self:center;
    & > *{
        width:50px;
        height:50px;
    }
`