import React from 'react';
import styled from 'styled-components';

const TrainingSlider = (props) => {
    const { color,wide } = props;
    
    return (
        <PrincipalContainer color={color}  width={wide} >
                <Books>
                    {props.children}
                </Books>
        </PrincipalContainer>
    )
};

export default TrainingSlider;

const theme = {
  blue: "linear-gradient(to bottom right,#0b6d9e,rgb(18,134,193));",
  green: "linear-gradient(to bottom right,var(--greenLeaf),var(--greenLeaf));",
  cyan: "linear-gradient(to bottom right,var(--green),var(--green));",
    ocean:"linear-gradient(to bottom right,#5b7fff, #33ccfc);",
    sunset:"linear-gradient(to bottom right,#ff9e68, #ff68de);"
};
const shadow = {    
    /* blue: "rgba(18,134,193,.8)",
    green: "rgba(18,134,193,.8)",
    cyan: "rgba(18,134,193,.8)", */
      ocean:"rgb(91, 127, 255, .8)",
      sunset:"rgb(255, 104, 222, .8)"
  };

const PrincipalContainer = styled.div`

    --width-slider: 300px;
    position: relative;
    color:var(--white);
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    height:${props => `${props.width*2.8}px`};
    
    
    border-radius: 20px;
    background:${props => theme[props.color]};
    box-shadow:0px 0px 20px 0 ${props => shadow[props.color]};
    
    margin:10px 5px;
    width: var(--width-slider) ;
    @media screen and (min-width: 1200px){
        --width-slider:380px;
    }
    @media screen and (max-width: 992px){
        --width-slider:250px;
        margin: 5px 1px;
    }
    @media screen and (max-width: 700px){
        --width-slider:350px;
    }
`;
    
const Books = styled.div`
    position:absolute;
    bottom:20%;
    border-radius:10px;
    box-shadow: 10px 10px #fff,20px 20px rgba(0,0,0, .13);
`;


