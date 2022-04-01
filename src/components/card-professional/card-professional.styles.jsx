import styled from 'styled-components'

const imageWidth = '120px';

export const CardProfessionalContainer =  styled.div`
    --general-width: 270px;
    padding: 0 10px;    
    margin: auto;
    position:relative;
    background-color:white;
    border-radius:10px;
    box-shadow:  0 0 20px 2px #CCC;
    display:flex;
    flex-direction:column;
    width: var(--general-width);
    margin-top:80px;
    margin-bottom:40px;
    min-height: 350px ;
    
`

export const ProfessionalDataContainer =  styled.div`
    --width: ${imageWidth};
    display:flex;
    justify-content:space-evenly;  
    flex-direction:column;
    margin:auto;
    margin-top: 40px;
`

export const ProfessionalImage = styled.div`
    --width: ${imageWidth};
    position:relative;
    border-radius:100%;
    margin-top:calc(var(--width)/2);
    justify-content:flex-start;
    width:var(--width);
    height:var(--width);
    /* left: calc(var(--general-width)/2 - var(--width)/2);
    top:calc(-1*var(--width)/2); */
    margin:auto;
    margin-top: 20px;
    
    &:after{
        content:'';
        position: absolute;
        left:0px;
        border-radius:100%;
        z-index:-10;
        box-shadow:  0 0 20px 2px #CCC;
        width:var(--width);
        height:var(--width);
    }
    img{
        
        z-index:100;
        border-radius:100%; 
        object-fit: cover;
        
        width:var(--width);
        height:var(--width);        
    }
` 

export const NameTitle = styled.h3`
    color: black;
    margin-bottom:10px;
`
export const ProfessionTitle = styled.h4`
    font-weight:400;
    font-size:15px;
    color: grey;
`
export const ContactBox = styled.div`
    width: 100%;
`
export const ProfessionalSocialNetworksContainer = styled.div`
    width: 80%;
    display:flex;
    align-self:flex-start;
    justify-content:center;
    margin: 10px 10% 15px 10%;    
`

export const SocialIconContainer = styled.div`
    align-self:center;
    display:block;
    margin-right:10px;
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

