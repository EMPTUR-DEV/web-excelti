import React from 'react';

import {TrainingListContainer} from './training-list.styles'


const TrainingList = ({handleOption,trainingDic}) => {
    
  console.log(trainingDic)
  
  return <TrainingListContainer>
            { 
              Object.keys(trainingDic).map((key)=>
              <li key={key} onClick={()=>handleOption(key)}><span>{trainingDic[key].name}</span></li> )
              
            }
        </TrainingListContainer>;
};

export default TrainingList;
