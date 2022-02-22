import styled from "styled-components"


export const FormationDescriptionContainer = styled.div `
    
width: calc(var(--ul-width) - var(--li-width));
background-color:#eee;
transition: all ease-in 0.4s ;

left:0;
top:var(--li-height);
border-radius:0;
position:absolute;
width:100%;
min-height: var(--ul-height) ;

@media screen and (max-width: 450px){
    position:relative;
    top:0;
}


`