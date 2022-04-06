import React from 'react';
import styled from 'styled-components'
import InterpretationBanner from './interpretaton-banner/interpretation-banner'
import TeamList from '../../components/shared/team-list/team-list';
import Title from '../../components/shared/title/title';
import useContent from '../../components/shared/useContent';
import useProfessionals from '../../hooks/useProfessionals';
import ProfessionalSlider from '../../components/professional-slider/professional-slider';
import { useTranslation } from 'react-i18next';

const InterpretationPage = () => {

const { interpretationBannerContent } = useContent();

const {getAllProfessionals} =  useProfessionals()
const topic = 'Interpreter'
const professionals = getAllProfessionals().filter((prof)=>prof.profession.includes(topic))

const { t } = useTranslation();


  return <InterpretationPageContainer>
            
            <Title title={t('interpretation')} color={'parrotGreen'}/>

            {interpretationBannerContent.map(({name,content,url,alt,key}) => 
                                            <InterpretationBanner key={key} title={name} content = {content}
                                                                  image={url} alt={alt} order={key} />)}
            {/* <TeamList teamTitle='intérpretes' teamList={professionals}/> */}
            <ProfessionalSlider professionals={professionals}/>
            
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