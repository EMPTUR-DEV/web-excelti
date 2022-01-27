import React from 'react';
import styled from 'styled-components';

const TraductionSlider = (props) => {
    const { title,color,wide } = props;
    
    return (
        <PrincipalContainer color={color}  width={wide} >
                <TitleTraduction width={wide}>
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
const shadow = {
    violet: "rgb(104,137,255, .8)",
      ocean:"rgb(91, 127, 255, .8)",
      sunset:"rgb(255, 104, 222, .8)"
  };

const PrincipalContainer = styled.div`
    position: relative;
    color:var(--white);
    display:flex;
    justify-content:center;
    margin:20px;
    flex-wrap:wrap;
    min-width:1000px;
    height:${props => `${props.width*2.8}px`};
    flex-grow:1;
    flex-shrink:1;
    flex-basis:1;
    min-width: 325px;
    border-radius: 20px;
    background:${props => theme[props.color]};
    box-shadow:0px 0px 20px 0 ${props => shadow[props.color]};
`;
    
const TitleTraduction = styled.div`
position: absolute;
    color:white;
    font-size:1.4rem;
    padding:15%;
`;
    
const Books = styled.div`
    position:absolute;
    bottom:8%;
    border-radius:10px;
    box-shadow: 10px 10px #fff,20px 20px rgba(0,0,0, .13);
`;


