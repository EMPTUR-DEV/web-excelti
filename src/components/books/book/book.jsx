import React,{ useState } from 'react';
import styled,{keyframes} from 'styled-components';
import MagicComponent from '../../shared/magic-component/magic-component';

const Book = (props) => {
    const {urlTraduction,name} = props.item;
    const [ showDescription,setShowDescription ]= useState(false);
const areas = ["a", "b", "c", "d"];
const areaRandom = areas[Math.floor(Math.random() * areas.length)];
    return(
        <Container area={areaRandom} onMouseEnter={()=>setShowDescription(!showDescription)}
        onMouseLeave={()=>setShowDescription(!showDescription)}>
            <MagicComponent>
            <img src={urlTraduction} key={name} alt={name}/>
            {
                showDescription ? <Text>{name}</Text>
                : <></>
            }
            </MagicComponent>
        </Container>
    )
}

export default Book;



const breatheAnimation = keyframes`
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.5);
    }
`;

const showUp = keyframes`
    0% {
        opacity:0;
    }

    100% {
        opacity:1;
    }
`;



const Container = styled.div`
    overflow:hidden;
    transition: .3 ease all;
    z-index:10;
    // min-width: 320px;
    max-height: 150px;
    position:relative;
    img{
        vertical-align: top;
        object-fit:cover;
        width: 100%;
        height:100%;
    }
    @media (min-width: 1200px) {
        max-height: 200px;
        
    }
    @media (min-width: 800px) {
        min-width: 100%;
        justify-self:center;
    }
 
    &:hover {
        img{
            object-fit:contain;
            transform: translate(-50%, -50%) scale(1);
            animation: ${breatheAnimation} .7s linear both;
        }

    }
`;

const Text = styled.div`
    background:rgba(0,0,0,.5);
    color:#fff;
    width: 100%;
    padding: 10px 60pxl
    text-align:center;
    position:absolute;
    bottom:0;
    overflow:auto;
    font-size:80%;
    animation: ${showUp} .5s linear;
    `;


