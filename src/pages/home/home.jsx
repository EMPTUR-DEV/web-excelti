import React,{ useState,useEffect } from 'react'
import HomeInfograph from '../../components/home-infograph/home-infograph'
import Info from '../../components/shared/info/info';
import useTraductions from '../../hooks/useTraductions';
import useProfessionals from '../../hooks/useProfessionals';
import ProfessionalSlider from '../../components/professional-slider/professional-slider'; 
import TraductionSlider from '../../components/traduction-slider/traduction-sliders';
import Slideshow from '../../components/shared/slide-show/slide-show';
import { useTranslation } from "react-i18next";
import Title from '../../components/shared/title/title';
import './home.scss'
import { interpretationBannerContent, trainingImages } from '../../components/shared/content';

const Home = () => {
    const { t } = useTranslation();
    const GetTraductions = useTraductions();
    const { getAllProfessionals } = useProfessionals();
    const [ professionals,setProfessionals ] = useState(null);
    const traductions = () =>{
        let traductionList = [];
        GetTraductions.forEach(traduction =>{
            traductionList = [...traductionList, ...traduction.list];
        });
        
        return traductionList;
    }

    

    useEffect(()=>{
        setProfessionals(getAllProfessionals());

    },[]);

    return (
        <div className='home-page-container'>
            <Title className='title' color={'black'} title={t("homeSubtitle")}/>
            <h4>{t("homeParagraph")}</h4>
            <HomeInfograph/>
            <div className='slider-container'>
            
            <TraductionSlider  time={10} color={'blue'} wide={160}>
                <Slideshow linked ={'/traduction'}  time={10}
                            items={traductions()} wide={230} height={200} />
            </TraductionSlider>
            <TraductionSlider  time={10} color={'green'} wide={160}>
                <Slideshow linked ={'/interpretation'}  time={10}
                 items={interpretationBannerContent} wide={230}  height={200}/>
            </TraductionSlider>
            <TraductionSlider time={10} color={'cyan'} wide={160}>
                <Slideshow linked ={'/training'}  time={10} items={trainingImages['curso'].concat(trainingImages['coaching'].concat(trainingImages['modalidad']))}
                             wide={230}  height={200}/>
            </TraductionSlider>
            
            </div>
            <ProfessionalSlider professionals={professionals}/>
            <Info
            subtitle={'Los invitamos a contactarse con nosotros. Será un gusto poder escucharlos y orientarlos en función de sus necesidades.'} 
            paragraph={' '}
            />
        </div>
    )
}

export default Home;
