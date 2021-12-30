import React from 'react'
import HomeInfograph from '../../components/home-infograph/home-infograph'
import Info from '../../components/shared/info/info';
import Banner from '../../components/header/banner/banner';
import { useTranslation } from "react-i18next";
import './home.scss'

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className='home-page-container'>
            <Banner src={'header/home-banner.jpg'} title={t("homeTitle").toUpperCase()} />
            <Info
            subtitle={t("homeSubtitle")}
            paragraph={t("homeParagraph")}
            />
            <HomeInfograph/>
        </div>
    )
}

export default Home;
