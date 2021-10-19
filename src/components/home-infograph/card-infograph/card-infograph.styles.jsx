import styled from 'styled-components'


export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 300px;
align-items: baseline;
justify-self: center;
height: 300px;
border-radius: 0 50% 50% 50%;
background: ${(props) => props.bgcolor};
box-shadow: 
    4px 4px 4px ${(props)=>props.boxshadowcolor},
    0px 0px 8px black
    ;
margin: 10px;
`

export const CardNumber = styled.div`
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 20px 0px;
    border-radius: 0px 50px 50px 0px;
    font-family: 'Jost', sans-serif;
    color: black;
    font-weight: bold;
    font-size: 16px;
    position: relative;
    background: ${({bgcolor})=> bgcolor ? bgcolor : "white"};
    box-shadow: 0px 2px 2px ${({boxshadowcolor}) => boxshadowcolor ? boxshadowcolor: "black"};
    .before{
        content: '';
    width: 34px;
    height: 90px;
    position: absolute;
    left: -33px;
    top: 0px;
    border-radius: 50px 0px 0px 50px;
    z-index: -1;
    background: ${({boxshadowcolor}) => boxshadowcolor ? boxshadowcolor: "black"};
    /* background: #95B7A2; */
    /* background: -webkit-linear-gradient(bottom, #95B7A2, #AED2BC); */
    background: -moz-linear-gradient(bottom, #95B7A2, #AED2BC);
    /* background: linear-gradient(to top, #95B7A2, #AED2BC); */
    ;
    }
    .after{
    background: ${({boxshadowcolor}) => boxshadowcolor ? boxshadowcolor: "black"};
    content: '';
    width: 25px;
    height: 40px;
    position: absolute;
    left: -25px;
    bottom: -40px;
    border-radius: 50px 0px 0px 50px;
    z-index: -1;
    }
`

export const CardTitle =styled.div`
font-family: 'Jost', sans-serif;
text-transform: uppercase;

font-size: 26px;
font-weight: 400;
display: flex; 
text-align: center;
`
export const CardText =styled.div`
justify-content: center;
width: 100%;
margin: 10px auto;
font-family: 'Jost', sans-serif;
text-align: center;
font-weight: 300;
`

export const CardImg =styled.div`
    justify-content: center;
    img{
    width: 30%;}`