import React,{useState} from 'react'
import Banner from '../../components/header/banner/banner';
import { useTranslation } from "react-i18next";
import Info from '../../components/shared/info/info';
import {TrainingContainer} from './training.styles'
import TrainingList from './training-list/training-list';
import TeamList from '../../components/shared/team-list/team-list';
import FormationContentList from './formation-content-list/formation-content-list';

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

    const cursos = [
        {title: 'Curso 1', description: 'Descripcion 1', key:1 },
        {title: 'Curso 2', description: 'Descripcion 2',key:2 },
        {title: 'Curso 3', description: 'Descripcion 3', key:3  },
        {title: 'Curso 4', description: 'Descripcion 4', key:4 },
    ] 

    return (
        <TrainingContainer>
            {/* <Banner src={'header/training-page.jpg'} title={t("training").toUpperCase()} /> */}
            <Info className='info' paragraph={paragraph()}/>
            <TrainingList>
            </TrainingList>
                { trainingOption ==='curso' ?
                        <FormationContentList  formationItems={cursos}/>
                        :
                        <h1>contenido</h1>
                }
            <TeamList teamTitle={'docentes'} teamList={teachers}/>
        </TrainingContainer>
    )
}

export default Training;
