import React,{useState} from 'react'

import { useTranslation } from "react-i18next";
import Info from '../../components/shared/info/info';
import {CoachingList, CoachingItem, TrainingContainer} from './training.styles'
import TrainingList from './training-list/training-list';
import TeamList from '../../components/shared/team-list/team-list';
import FormationContentList from './formation-content-list/formation-content-list';

const Training = () => {
    const { t } = useTranslation();

    const [trainingOption, setTrainingOption] = useState('curso');
    const [coachingOption, setCoachingOption] = useState('')

    const paragraph = () => {
        return(<div>
            {t('trainingParagraph')}
        </div>)
    };

    const handleOption = (option) =>{
        setTrainingOption(option)
    }

    const teachers = [
        'Olga Álvarez – Coordinadora de EXCELTI',
        'Elisa Bianchi',
        'Violeta Harfuch',
        'Gabriela Yáñez'
    ]

    const trainingList = [
        {title: 'Coaching', link:'/',key:'coaching',subTitle:'Inglés-español. Consecutiva y simultánea. Duración: 2 años - Coordinadora: Olga Álvarez-Barr - Intérprete consultora. CTPCBA, AIIC, ADICA '} ,
        {title: 'Curso de interpretación (Inglés - Español)', link:'/',key:'curso',subTitle:'Metodología de aprendizaje personalizada y con fines específicos para:'},   
    ]

    const cursos = [
        // ACA VA UN FORMATO HTML YA PRE DISEÑADO PARA CADA CURSO O HACEMOS UN FORMATO GENERAL Y LO RELLENAMOS CON ESTA INFORMACIÓN
        {title: 'Módulo 1',topics: [{topicTitle: 'Consecutiva', description: 'En esta sección se encontrará el esquema del curso...  1' }], key:1 },
        {title: 'Módulo 2',topics: [{topicTitle:'Consecutiva Formal', description: 'Descripcion 2'},{topicTitle:'Introducción a la simultánea', description: 'Descripcion 2.5'}],key:2 },
        {title: 'Módulo 3',topics: [{topicTitle:'Simultánea - Organísmos internacionales', description: 'Descripcion 3'}], key:3  },
        {title: 'Módulo 4',topics: [{topicTitle:'Simultánea remóta - Mercados especializados', description: 'Descripcion 4'}], key:4 },
    ] 
    const coaching = [
        {title: 'Traductores', description: 'Descripcion 1', key:1 },
        {title: 'Intérpretes', description: 'Descripcion 2',key:2 },
        {title: 'Estudiantes', description: 'Descripcion 3', key:3  },
        {title: 'Ingresantes en instituciones internacionales', description: 'Descripcion 4', key:4 },
    ] 

    return (
        <TrainingContainer>
            <Info className='info' paragraph={paragraph()}/>
            <TrainingList handleOption ={handleOption} trainingList={trainingList}>
            </TrainingList>
                { trainingOption ==='curso' ?
                        <>
                            <h2>Curso de Interpretación remóta</h2>
                            <p>{trainingList[0].subTitle}</p>
                            <FormationContentList  formationItems={cursos}/>
                        </>
                        :
                        <>
                            <h2>Coaching</h2>
                            <p>{trainingList[1].subTitle}</p>
                            <CoachingList >
                            {coaching.map(({title,description,key})=> 
                                <CoachingItem   itemActive={key==coachingOption ? true : false} 
                                                key={key}
                                                onClick={()=>key==coachingOption ? setCoachingOption('') :  setCoachingOption(key)}> 
                                    <h3>{title}</h3>
                                    <span>{description}</span>
                                </CoachingItem>
                            )}
                            </CoachingList>

                        </>
                }
            <TeamList teamTitle={'docentes'} teamList={teachers}/>
        </TrainingContainer>
    )
}

export default Training;
