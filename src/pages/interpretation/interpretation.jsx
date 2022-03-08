import React from 'react';
import styled from 'styled-components'
import InterpretationBanner from './interpretaton-banner/interpretation-banner'
import TeamList from '../../components/shared/team-list/team-list';
import Title from '../../components/shared/title/title';
import { interpretationBannerContent } from '../../components/shared/content';

const InterpretationPage = () => {

  const professionals = [
    /* 'Cynthia Abad Quintalé',
    'Olga Álvarez',
    'Cristina Cucchi', */
    'Violeta Harfuch',
    'Isolda Rodriguez Villegas',
    'Laura Tavolai',
    'Vivien Perez Moran'
  
]

  return <InterpretationPageContainer>
            
            <Title title={'Interpretacion'} color={'parrotGreen'}/>

            {interpretationBannerContent.map(({name,content,url,alt,key}) => 
                                            <InterpretationBanner key={key} title={name} content = {content}
                                                                  image={url} alt={alt} order={key} />)}
            <TeamList teamTitle='intérpretes' teamList={professionals}/>
            
        </InterpretationPageContainer>;
};

export default InterpretationPage;

const InterpretationPageContainer = styled.div`
  margin-top: 100px;
  align-items: center;
  overflow:hidden;
`
    
    
    // & > :nth-child(2n+2){
    //     flex-direction: row-reverse;
    // }