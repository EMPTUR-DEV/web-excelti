import styled from 'styled-components'

export const CardProfessionalContainer =  styled.div`
    --general-width: 350px;
    margin: auto;
    position:relative;
    width:600px;
    margin-top:20px;
    background-color:white;
    border-radius:10px;
    box-shadow:  0 0 20px 2px #CCC;
    margin-top:50px;
    margin-bottom:80px;

    @media (max-width: 700px) {
        display:flex;
        flex-direction:column;
        width: var(--general-width);
        margin-top:100px;
        margin-bottom:40px;
    }
    @media (max-width: 350px) {
        --general-width: 300px;
    }

`

export const ProfessionalDataContainer =  styled.div`
    display:flex;
    justify-content:space-evenly;  
    
    flex-direction:column;
    @media (max-width: 700px) {
        margin:auto;
        margin-top:50px;
    }
`

export const ProfessionalImage = styled.div`
    --width: 150px;
    width: var(--width);
    margin:auto;
    position:absolute;
    left:calc(-1*var(--width)/2);
    border-radius:100%;
    margin-top:40px;
    justify-content:flex-start;
    
    @media (max-width: 700px) {
        --width: 80px;
        width:var(--width);
        height:var(--width);
        margin:auto;
        left: calc(var(--general-width)/2 - var(--width)/2);
        top:-40px;
        
    }

    &:after{
        content:'';
        position: absolute;
        width: var(--width);
        height:var(--width);
        left:0px;
        border-radius:100%;
        z-index:-10;
        box-shadow:  0 0 20px 2px #CCC;
        @media (max-width: 700px) {
            --width: 80px;
            width:var(--width);
            height:var(--width);
        }
    }
    img{
        
        z-index:100;
        border-radius:100%; 
        object-fit: cover;
        width: var(--width);
        height:var(--width);
        @media (max-width: 700px) {
            --width: 80px;
            width:var(--width);
            height:var(--width);
        }

        
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-self:center;
    row-gap: 10px;
    column-gap:10px;
    margin: 10px 10% 15px 15%;

    @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    
`
export const SocialIconContainer = styled.div`
    align-self:center;
    & > *{
        border-radius:100%;
        
        &:hover{
            box-shadow: 0 0 1px 5px #aac;
        }
        transition: ease-in 0.2s box-shadow;
    }
`

export const CvLink = styled.button`
    
    
    
    font-weight: bold;
    background-color:var(--green);
    text-transform: uppercase;
    border:none;
    width:50px;
    height:50px;
    color:white;
    font-size:23px;
    border-radius: 100%;
    
    cursor: pointer;
    
    
    &:active{
        background-color: var(--blue);
        color:white;
    }
    
    
`