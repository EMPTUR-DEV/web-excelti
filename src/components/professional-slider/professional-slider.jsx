import React from 'react';
import styled from 'styled-components';
import useSlideShow from '../../hooks/useSlideShow';
import CardProfessional from '../card-professional/card-professional';

const   ProfessionalSlider =({professionals})=>{
    const { next } = useSlideShow(3.5);
    const handleLink = (linked) => {
        if(linked) window.location.replace(linked);
      }
    
    return (
        <PrincipalContainer>
            <SliderContainer >
                <CardsContainer onClick={()=>handleLink('/professionals')} ref={next()}>
                { 
                professionals ?
                    professionals.map(professional => (
                        <CardProfessional   name={professional.name} professions={professional.profession}  key={professional.name}/>
                        ))
                        :<></>
                    }  
                </CardsContainer>
            </SliderContainer>
        </PrincipalContainer>
        );
    };

export default ProfessionalSlider;

const PrincipalContainer = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
    margin:20px;
    
    height:500px;
    flex-grow:1;
    flex-shrink:1;
    flex-basis:1;
    width: 325px;
    overflow:hidden;
    @media screen and  (min-width: 700px) {
        width: 670px;
        margin: 20px auto ;
    }
    @media screen and  (min-width: 800px) {
        width: 870px;
        margin: 20px auto ;
    }
`;

const SliderContainer = styled.div`
    max-width:100%;
    align-self:center;
    overflow:hidden;
    width: 100%;
    
`;


const CardsContainer = styled.div`
    display: flex;
    flex-wrap:nowrap;
    max-width:100%;
    cursor:pointer;
    & > *{
        min-width:100%;
        transition: .3 ease all;
        z-index:10;
        box-shadow:none;

        @media screen and  (min-width: 800px) {
        min-width: 290px;
        
        }
    }
`;