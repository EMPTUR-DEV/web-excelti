import React from 'react'
import { FormationDescriptionContainer } from './formation-description.styles'


/* topicTitle:'Simultánea - Organísmos internacionales', 
            requisitos:'Título universitario o terciario en cualquier disciplina. Nivel de lengua extranjera equivalente a la de un traductor o profesor de inglés. Nivel de lengua española equivalente a la de un hispanoparlante culto.',
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
            key:'organismos' */
const FormationDescription = ({formationItem}) => {
    
  return (
        <FormationDescriptionContainer>
            <h2>{formationItem.title}</h2>
            <span>{formationItem.requirements}</span>
        </FormationDescriptionContainer>
        )
}

export default FormationDescription