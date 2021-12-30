import React from 'react';
import styled from 'styled-components';

const TraductionSlider = (props) => {
    const { title,color,wide } = props;
    
    return (
        <PrincipalContainer width={wide} >
                <TitleTraduction color={color} width={wide}>
                    {title}
                </TitleTraduction>
                <Books>
                    {props.children}
                </Books>
        </PrincipalContainer>
    )
};

export default TraductionSlider;

const theme = {
  violet: "linear-gradient(to bottom right,#6889ff, #c668ff);",
    ocean:"linear-gradient(to bottom right,#5b7fff, #33ccfc);",
    sunset:"linear-gradient(to bottom right,#ff9e68, #ff68de);"
};

const PrincipalContainer = styled.div`
    position: relative;
    max-width:100%;
    color:var(--white);
    display:flex;
    justify-content:center;
    margin:20px;
    flex-wrap:wrap;
    min-width:500px;
    height:${props => `${props.width*2.8}px`};
`;
    
const TitleTraduction = styled.div`
    color:white;
    font-size:1.4rem;
    padding:15%;
    border-radius: 73% 27% 44% 56% / 49% 44% 56% 51%;
    background:${props => theme[props.color]};
    width: -webkit-fill-available;
`;
    
const Books = styled.div`
    position:absolute;
    bottom:8%;
    box-shadow: 1px 1px 20px var(--black);
`;


