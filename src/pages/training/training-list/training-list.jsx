import React from 'react';

import {TrainingListContainer} from './training-list.styles'


const TrainingList = ({handleOption,trainingDic}) => {
    
  
  return <TrainingListContainer>
            { 
              Object.keys(trainingDic).map((key)=>
              <li key={key} onClick={()=>handleOption(key)}><span>{trainingDic[key].title}</span></li> )
              
            }
        </TrainingListContainer>;
};

export default TrainingList;
