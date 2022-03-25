import React from 'react'
import {    FormationDescriptionContainer, 
            HeadTitleCourse, 
            ContentInformationContainer,
            SpanInfoCourse,
            IconInfoCourseContainer} from './formation-description.styles'
import {BsCardChecklist} from 'react-icons/bs'

const iconSize = '75px';
const iconColor = 'var(--green)';

const FormationDescriptionCoaching = ({formationItems}) => {

    console.log(formationItems)
    return (
        <FormationDescriptionContainer>
            <HeadTitleCourse>

            <h1>Coaching</h1>
            </HeadTitleCourse>
            
            <ContentInformationContainer>
            {
                formationItems.content.map((formationItem) =>
                    <SpanInfoCourse>
                        <strong>
                            <IconInfoCourseContainer><BsCardChecklist size={iconSize} color={iconColor}/></IconInfoCourseContainer>
                            <h4> {formationItem.title} </h4> 
                        </strong>
                    </SpanInfoCourse> 
                )
            }

            </ContentInformationContainer>

        </FormationDescriptionContainer>
    )
}

export default FormationDescriptionCoaching