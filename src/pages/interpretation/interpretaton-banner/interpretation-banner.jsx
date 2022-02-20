import React from 'react';
import styled from "styled-components";

const InterpretationBanner = ({title,content,image,alt}) => {
  return <InterpretationBannerContainer>
            <h2>{title}</h2>
            <img src={image} alt={alt} />
            <Info>{content}</Info>     
        </InterpretationBannerContainer>;
};

export default InterpretationBanner;

const InterpretationBannerContainer = styled.div`
width: 100%;
padding: 1% 5%  5% 5%;
img{
    margin-top: 5px;
    max-width:100%;
    margin-bottom:5px;
    @media (min-width: 1400px) {
        max-width: 70%;
    }
}
`

const Info = styled.div`
    text-align: left;
    line-height:1.5;
    @media (min-width: 1400px) {
        max-width: 70%;
        margin:auto;
    }
`