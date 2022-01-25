import React from 'react'
import HomeInfograph from '../../components/home-infograph/home-infograph'
import Info from '../../components/shared/info/info';
import useTraductions from '../../hooks/useTraductions';
import Banner from '../../components/header/banner/banner';
import TraductionSlider from '../../components/traduction-slider/traduction-sliders';
import Slideshow from '../../components/shared/slide-show/slide-show';
import { useTranslation } from "react-i18next";
import './home.scss'

const Home = () => {
    const { t } = useTranslation();
    const GetTraductions = useTraductions();

    return (
        <div className='home-page-container'>
            <Banner src={'header/home-banner.jpg'} title={t("homeTitle").toUpperCase()} />
            <Info
            subtitle={`${t("homeSubtitle")}`}
            paragraph={t("homeParagraph")}
            
            />
            <HomeInfograph/>
            <div className='slider-container'>
                {
                    GetTraductions.map(x=>(
                        <TraductionSlider time={2.5} key={x.title} title={x.title} color={x.color} wide={160}>
                                <Slideshow time={2.5} key={x.title} items={x.list} wide={160}/>
                            </TraductionSlider>
                        )
                    )
                }
                <img className='world' src='home/world.svg'/>
            </div>
        </div>
    )
}

export default Home;
