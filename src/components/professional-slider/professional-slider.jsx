import React from 'react';
import styled from 'styled-components';
import useSlideShow from '../../hooks/useSlideShow';
import CardProfessional from '../card-professional/card-professional';

const ProfessionalSlider =({professionals})=>{
    const { next } = useSlideShow(3.5);
    return (
        <PrincipalContainer>
            <SliderContainer >
                <CardsContainer ref={next()}>
                { 
                professionals ?
                    professionals.map(professional => (
                        <CardProfessional name={professional.name} professions={professional.profession}  key={professional.name}/>
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
    flex-wrap:wrap;
    min-width:1000px;
    height:500px;
    flex-grow:1;
    flex-shrink:1;
    flex-basis:1;
    min-width: 325px;
    overflow:hidden;
`;

const SliderContainer = styled.div`
    max-width:100%;
    align-self:center;
    overflow:hidden;
`;


const CardsContainer = styled.div`
    display: flex;
    flex-wrap:nowrap;
    max-width:270px;
    & > *{
        min-width:100%;
        transition: .3 ease all;
        z-index:10;
        box-shadow:none;
    }
`;