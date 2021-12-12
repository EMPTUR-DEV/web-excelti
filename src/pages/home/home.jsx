import React from 'react'
import HomeInfograph from '../../components/home-infograph/home-infograph'
import Info from '../../components/shared/info/info';
import { useTranslation } from "react-i18next";
import './home.scss'

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className='home-page-container'>
            <Info
            title={t("homeTitle")}
            subtitle={t("homeSubtitle")}
            paragraph={t("homeParagraph")}
            />
            <HomeInfograph/>
        </div>
    )
}

export default Home;
