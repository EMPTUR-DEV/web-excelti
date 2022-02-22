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
        {   title: 'Enlace',
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'A distancia',
            resumen:'Este curso de interpretación de enlace se articula con los siguientes',
            cursosArticulados: ['Consecutivas',
                                'Consecutiva formal',
                                'Introducción a la simultánea',
                                'Simultánea - Organismos internacionales',
                                'Simultánea - Mercados especializados' ],
            infoPedagogica: 'El curso de interpretación de enlace tiene una duración de 2 meses, según el siguiente detalle',
            duracion: '2 meses (abril y mayo)',
            objetivos:' Interpretación de enlace. Presencialidad vs Virtualidad. Técnicas de desverbalización. Técnicas de expresión oral. Traducción a primera vista. Introducción a las técnicas de interpretación consecutiva sin notas. Primeros pasos para la interpretación simultánea. Nuevos medios técnicos para la interpretación.',
            modulosTematicos:'Gestión empresarial. Negociaciones. Temas de actualidad.',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:' Miércoles de 18.00 a 19.30 horas </br> Actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir.',
            tutoria: 'Día y horario a convenir <br/> Actividad sincrónica individual. Se trabaja intensamente para alcanzar los objetivos en funcion del perfil de cada asistente.',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación de enlace y primera vista',
            key:1},
                
        {   title: 'Consecutiva', 
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'A distancia',
            resumen:'Este curso de consecutivas se articula con los siguientes',
            cursosArticulados: ['Enlace',
                                'Consecutiva formal',
                                'Introducción a la simultánea',
                                'Simultánea - Organismos internacionales',
                                'Simultánea - Mercados especializados' ],
            infoPedagogica: 'El curso de interpretación de enlace tiene una duración de 2 meses, según el siguiente detalle',
            duracion: '2 meses (abril y mayo)',
            objetivos:'Consecutivas sin notas. Con notas. Corta. Formal. Diplomática. Diferentes dispositivos para las consecutivas. Tablet interpretation. Consecutiva remota. Técnicas de expresión oral. Aplicación de la consecutiva a la simultanea',
            modulosTematicos:'Medio ambiente. Salud pública. Temas de actualidad.',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Miércoles de 18.00 a 19.30 horas. <br/> Actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir.',
            tutoria: 'Día y horario a convenir <br/> Actividad sincrónica individual. Se trabaja intensamente para alcanzar los objetivos en funcion del perfil de cada asistente.',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación de enlace y primera vista',
            key:2
            }, 

        {   title:'Consecutiva Formal',
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'A distancia',
            resumen:'Este curso de consecutivas se articula con los siguientes',
            cursosArticulados: ['Enlace',
                                'Consecutivas',
                                'Introducción a la simultánea',
                                'Simultánea - Organismos internacionales',
                                'Simultánea - Mercados especializados' ],
            infoPedagogica: 'El curso de interpretación consecutiva formal  tiene una duración de 2 meses, según el siguiente detalle',
            duracion: ' 2 meses (agosto y septiembre)',
            objetivos:'Adquirir las habilidades necesarias para actuar como intérprete consecutivo. Características de la situación formal. La presencia y exposición del intérprete. Ceremonial y protocolo. Técnicas de expresión oral. Aplicación de la consecutiva a la simultánea',
            modulosTematicos:'Política. Diplomacia. Banquetes. Unidades culturales argentinas',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir',
            tutoria: 'dia y horario a convenir. Actividad sincrónica e individual. Se trabaja intensamente para alcanzar los objetivos en función del perfil de cada asistente',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:3
        }, 


        {   title:'Introducción a la simultánea', 
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'A distancia',
            resumen:'Este curso de introducción a la simultánea se articula con los siguientes',
            cursosArticulados: ['Enlace',
                                'Consecutivas',
                                'Consecutiva formal',
                                'Simultánea - Organismos internacionales',
                                'Simultánea - Mercados especializados' ],
            infoPedagogica: 'El curso de introducción a la interpretación simultánea remota tiene una duración de 4 meses, según el siguiente detalle',
            duracion: '4 meses (agosto a noviembre)',
            objetivos:'Introducción a las técnicas de interpretación simultánea. Escuchas intensivas. Uso profesional de la voz (español e ingles). Expresión para la simultánea. Preparación de conferencias (lengua y terminología). El pasaje de lo presencial a la virtualidad',
            modulosTematicos:'Medio ambiente. Educación. Empleo. Temas de actualidad',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Lunes de 18.00 a 19.30 horas <br/> Actividad sincrónica y grupal. Se utiliza la plataforma ZOOM, licenciada. La clase se estructura sobre una planificación previamente distribuida. La grabación de la clase se hace accesible a los alumnos que no puedan asistir',
            tutoria: 'dia y horario a convenir. Actividad sincrónica e individual. Se trabaja intensamente para alcanzar los objetivos en función del perfil de cada asistente',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:4
        }, 
        
        {   title:'Simultánea - Organísmos internacionales', 
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'A distancia',
            resumen:'Este curso de simultánea se articula con los siguientes',
            cursosArticulados: ['Enlace',
                                'Consecutivas',
                                'Consecutiva formal',
                                'Introducción a la simultánea',
                                'Simultánea - Mercados especializados' ],
            infoPedagogica: 'El curso de introducción a la interpretación simultánea remota tiene una duración de 4 meses, según el siguiente detalle',
            duracion: '4 meses (abril a julio)',
            objetivos:' a) adquirir las habilidades necesarias para actuar como intérprete simultáneo (inglés-español y viceversa); y b) familiarizarse con el mercado internacional de la interpretación',
            modulosTematicos:'Organizaciones internacionales. Política internacional',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'Clase remota: lunes de 18.00 a 19.30 horas',
            tutoria: ' a convenir',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Interpretación simultánea remota',
            key:5
            },  
        
        {   title:'Simultánea remóta - Mercados especializados',  
            requirements:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
            admision: 'En función de una entrevista personal a distancia, cuyo fin es orientar a los interesados, evaluar su perfil y anticipar qué áreas deben desarrollar durante su formación.',
            entrevistas:'Se organiza en función del CV resumido del interesado, en el que consten sus datos personales, su formación (año y lugar de graduación y promedio general), antecedentes laborales. - Días y horario: a combinar. La entrevista tiene una duración aproximada de 1 hora. ',
            modalidad:'A distancia',
            resumen:'Este curso de simultánea se articula con los siguientes',
            cursosArticulados: ['Enlace',
                                'Consecutivas',
                                'Consecutiva formal',
                                'Introducción a la simultánea',
                                'Simultánea - Mercados especializados' ],
            infoPedagogica: 'El curso de introducción a la interpretación simultánea remota tiene una duración de 4 meses, según el siguiente detalle',
            duracion: '4 meses (abril a julio)',
            objetivos:'a) adquirir las habilidades necesarias para actuar como intérprete simultáneo (inglés-español y viceversa); b) familiarizarse con el mercado argentino y regional de trabajo de la interpretación; y c) práctica de relay',
            modulosTematicos:'Tecnología. Medicina. Economía y comercio',
            periodicidadSemanal:'1 clase a distancia de 90 minutos + 1 tutoría a distancia',
            clase:'clase remota. lunes de 18.00hs a 19.30hs.',
            tutoria: ' a convenir',
            profesores:['Olga Álvarez','Violeta Harfuch','Gabriela Yáñez'],
            evaluacion: 'Simulacro de conferencia internacional',
            key:6
            },  
        
    ] 

    const coaching = [
        
        {title: 'Traductores', 
         topics: [{topicTitle: 'Traductores', description: 'Descripcion 1'}], 
         key:1 } ,
        {title:'Intérpretes',
        topics: [{topicTitle:'Intérpretes', description: 'Descripcion 2'}],
        key:2 },
        {title: 'Estudiantes',
        topics: [{topicTitle:'Estudiantes', description: 'Descripcion 3'}], 
        key:3  },
        {title: 'Instituciones internacionales',
        topics: [{topicTitle:'Ingresantes en instituciones internacionales', description: 'Descripcion 4'}], 
        key:4 },
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
                            <FormationContentList  formationItems={coaching}/>

                        </>
                }
            <TeamList teamTitle={'docentes'} teamList={teachers}/>
        </TrainingContainer>
    )
}

export default Training;
