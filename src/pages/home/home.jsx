import React from 'react'
import HomeInfograph from '../../components/home-infograph/home-infograph'
import Info from '../../components/shared/info/info';
import useTraductions from '../../hooks/useTraductions';
import Banner from '../../components/header/banner/banner';
import TraductionSlider from '../../components/traduction-slider/traduction-sliders';
import Slideshow from '../../components/shared/slide-show/slide-show';
import { useTranslation } from "react-i18next";
import Title from '../../components/shared/title/title';
import './home.scss'

const Home = () => {
    const { t } = useTranslation();
    const GetTraductions = useTraductions();
    const traductions = () =>{
        let traductionList = [];
        GetTraductions.forEach(traduction =>{
            traductionList = [...traductionList, ...traduction.list];
        });
        
        return traductionList;
    }

    return (
        <div className='home-page-container'>
            <Banner src={'header/home-banner.jpg'} title={t("homeTitle").toUpperCase()} />
            <Title color={'black'} title={t("homeSubtitle")}/>
            <Info
             paragraph={t("homeParagraph")}
            
            />
            <HomeInfograph/>
            <div className='slider-container'>
            
            <TraductionSlider time={2.5} color={'blue'} wide={160}>
                <Slideshow time={2.5} items={traductions()} wide={160}/>
            </TraductionSlider>
            
            </div>
            <Info
            subtitle={'Los invitamos a contactarse con nosotros. Será un gusto poder escucharlos y orientarlos en función de sus necesidades.'} 
            paragraph={' '}
            />
        </div>
    )
}

export default Home;
