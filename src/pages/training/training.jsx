import React,{useState} from 'react'
import Banner from '../../components/header/banner/banner';
import { useTranslation } from "react-i18next";
import Info from '../../components/shared/info/info';
import {TrainingContainer} from './training.styles'
import TrainingList from './training-list/training-list';
import TeamList from '../../components/shared/team-list/team-list';

const Training = () => {
    const { t } = useTranslation();

    const [trainingOption, setTrainingOption] = useState('curso');

    const paragraph = () => {
        return(<div>
            {t('trainingParagraph')}
        </div>)
    };

    const teachers = [
        'Olga Álvarez – Coordinadora de EXCELTI',
        'Elisa Bianchi',
        'Violeta Harfuch',
        'Gabriela Yáñez'
    ]

    return (
        <TrainingContainer>
            {/* <Banner src={'header/training-page.jpg'} title={t("training").toUpperCase()} /> */}
            <Info className='info' paragraph={paragraph()}/>
            <TrainingList>
            </TrainingList>
            <div className='content'>
                <h2>Contenido de la capacitación</h2>
            </div>
            <TeamList teamTitle={'docentes'} teamList={teachers}/>
        </TrainingContainer>
    )
}

export default Training;
