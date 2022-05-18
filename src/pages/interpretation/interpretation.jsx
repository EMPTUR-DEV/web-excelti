import React from 'react';
import { useHistory } from 'react-router-dom';
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
const { t } = useTranslation();
const {getAllProfessionals} =  useProfessionals()
const topic = t("interpreter")
const professionals = getAllProfessionals().filter((prof)=>prof.profession.includes(topic))
const history = useHistory()



  return <InterpretationPageContainer>
            
            <Title title={t('interpretation')} color={'parrotGreen'}/>

            {interpretationBannerContent.map(({name,content,url,alt,key,extraContent}) => 
                                            <InterpretationBanner key={key} title={name} content = {content}
                                                                  image={url} alt={alt} order={key} extraContent={extraContent} />)}
            {/* <TeamList teamTitle='intérpretes' teamList={professionals}/> */}
            <ProfessionalSlider history={history} professionals={professionals}/>
            
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