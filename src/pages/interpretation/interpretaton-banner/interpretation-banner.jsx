import React from 'react';

import { InterpretationBannerContainer, Info } from './interpretation-banner.styles';

const InterpretationBanner = ({title,content,image,alt}) => {
  return <InterpretationBannerContainer>
            <Info>
                <h2>{title}</h2>
                <span>{content}</span>   
            </Info>
            <img src={image} alt={alt} />
             
        </InterpretationBannerContainer>;
};

export default InterpretationBanner;
