import React from 'react';
import styled from 'styled-components';

const TraductionSlider = (props) => {
    const { color,wide } = props;
    
    return (
        <PrincipalContainer color={color}  width={wide} >
                <Books>
                    {props.children}
                </Books>
        </PrincipalContainer>
    )
};

export default TraductionSlider;

const theme = {
  blue: "linear-gradient(to bottom right,#0b6d9e,rgb(18,134,193));",
    ocean:"linear-gradient(to bottom right,#5b7fff, #33ccfc);",
    sunset:"linear-gradient(to bottom right,#ff9e68, #ff68de);"
};
const shadow = {
    blue: "rgba(18,134,193,.8)",
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
    
const Books = styled.div`
    position:absolute;
    bottom:20%;
    border-radius:10px;
    box-shadow: 10px 10px #fff,20px 20px rgba(0,0,0, .13);
`;


