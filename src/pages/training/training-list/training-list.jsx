import React from 'react';

import {TrainingListContainer} from './training-list.styles'


const TrainingList = () => {
    const trainingList = [
        {'title': 'Coaching', 'link':'/','key':'coaching'},
        {'title': 'Curso de interpretación (Inglés - Español)', 'link':'/','key':'curso'},
        
        
    ]
  return <TrainingListContainer>
            {trainingList.map(({title,link,key}) => <li key={key}><span>{title}</span></li>)}
        </TrainingListContainer>;
};

export default TrainingList;
