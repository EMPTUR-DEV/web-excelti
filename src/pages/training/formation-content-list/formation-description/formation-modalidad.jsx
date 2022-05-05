import React, {useState,useEffect,useRef} from 'react';
import {  FormationDescriptionContainer, 
          ContentOverviewContainer,
          LeftSide, 
          HeadTitleCourse, 
          ContentInformationContainer, 
          SpanInfoModalidad, 
          IconInfoCourseContainer, 
          ExtraInfoContent, 
          ExtraInfoTitle,  
          ArticulatedCoursesList,
          TeachersListCourse,
          SpanExtraInfo} from './formation-description.styles';
import {BsCardChecklist, BsFillBookmarkCheckFill,BsArrowBarDown,BsArrowBarUp} from 'react-icons/bs';
import {FaUserEdit,FaPeopleArrows} from 'react-icons/fa';
import {IoPeopleCircle} from 'react-icons/io5';
import {SiGoogleclassroom} from 'react-icons/si';
import {MdAccountTree} from 'react-icons/md';
import {RiTeamFill} from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useTranslation } from "react-i18next";
import FormationContentBox from './formation-box-content/formation-box-content';



const iconSize = '75px';
const iconColor = 'var(--green)';
const FormationModalidad = ({formationItem}) => {
  
  const { t } = useTranslation();


  return (
        <FormationDescriptionContainer itemID='HeadTitleCourse'>
            <HeadTitleCourse>
              <h1>{t('modalidad')}</h1>
            </HeadTitleCourse>
            
            <ContentInformationContainer>
              {
                formationItem.content.map((item)=>                
                  <FormationContentBox key = {item.key}  item={item}/>
                )
              }
              

            </ContentInformationContainer>

        </FormationDescriptionContainer>
        )
}

export default FormationModalidad