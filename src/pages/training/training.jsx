import React from 'react'
import Banner from '../../components/header/banner/banner';
import { useTranslation } from "react-i18next";
import Info from '../../components/shared/info/info';

const Training = () => {
    const { t } = useTranslation();

    const paragraph = () => {
        return(<div>
            {t('trainingParagraph')}
        </div>)
    };

    return (
        <div>
            <Banner src={'header/training-page.jpg'} title={t("training").toUpperCase()} />
            <Info paragraph={paragraph()}/>
        </div>
    )
}

export default Training;
