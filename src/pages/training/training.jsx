import React from 'react'
import Banner from '../../components/header/banner/banner';
import { useTranslation } from "react-i18next";
import Info from '../../components/shared/info/info';
import {TrainingContainer} from './training.styles'

const Training = () => {
    const { t } = useTranslation();

    const paragraph = () => {
        return(<div>
            {t('trainingParagraph')}
        </div>)
    };

    return (
        <TrainingContainer>
            {/* <Banner src={'header/training-page.jpg'} title={t("training").toUpperCase()} /> */}
            <Info paragraph={paragraph()}/>

        </TrainingContainer>
    )
}

export default Training;
