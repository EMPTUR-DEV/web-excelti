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
    console.log(formationItem.cursosArticulados)
  return (
        <FormationDescriptionContainer>
            <h2>{formationItem.title}</h2>
            <span><strong><h4>Requisitos:</h4>              </strong><p> {formationItem.requirements}</p></span>
            <span><strong><h4>Admisión: </h4>               </strong><p>{formationItem.admision}</p></span>
            <span><strong><h4>Entrevistas: </h4>            </strong><p>{formationItem.entrevistas}</p></span>
            <span><strong><h4>Modalidad: </h4>              </strong><p>{formationItem.modalidad}</p></span>
            <span><strong><h4>Resumen: </h4>                </strong><p>{formationItem.resumen}</p></span>
            <span><strong><h4>Cursos articulados: </h4>     </strong><ul>{formationItem.cursosArticulados.map((curso)=><li>{curso}</li>)}</ul></span>
            <span><strong><h4>Información pedagógica: </h4> </strong><p>{formationItem.infoPedagogica}</p></span>
            <span><strong><h4>Duración: </h4>               </strong><p>{formationItem.duracion}</p></span>
            <span><strong><h4>Objetivos: </h4>              </strong><p>{formationItem.objetivos}</p></span>
            <span><strong><h4>Módulos temáticos: </h4>      </strong><p>{formationItem.modulosTematicos}</p></span>
            <span><strong><h4>Periodicidad semanal: </h4>   </strong><p>{formationItem.periodicidadSemanal}</p></span>
            <span><strong><h4>Clase: </h4>                  </strong><p>{formationItem.clase}</p></span>
            <span><strong><h4>Tutorías: </h4>               </strong><p>{formationItem.tutoria}</p></span>
            <span><strong><h4>Profesores: </h4>             </strong><ul>{formationItem.profesores.map((profesor)=> <li>{profesor}</li>) } </ul></span>


        </FormationDescriptionContainer>
        )
}

export default FormationDescription