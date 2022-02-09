import React from 'react';

import {TrainingListContainer} from './training-list.styles'


const TrainingList = ({handleOption,trainingList}) => {
    
  return <TrainingListContainer>
            {trainingList.map(({title,link,key}) => <li key={key} onClick={()=>handleOption(key)}><span>{title}</span></li>)}
        </TrainingListContainer>;
};

export default TrainingList;
