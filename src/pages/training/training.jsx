import React from 'react'
import Banner from '../../components/header/banner/banner';
import { useTranslation } from "react-i18next";

const Training = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Banner src={'header/training-page.jpg'} title={t("training").toUpperCase()} />
        
        </div>
    )
}

export default Training;
