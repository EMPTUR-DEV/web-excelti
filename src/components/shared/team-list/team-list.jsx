import React from 'react';
import { TeamContainer, List } from './team-list.styles';

const TeamList = ({teamTitle,teamList}) => {
  const handleLink = (linked) => {
    if(linked) window.location.replace(linked);
  }

  return <TeamContainer>
            <h2>Equipo de {teamTitle}</h2>
            <List>{teamList.map(prof => <li>{prof}</li>)}</List>
          <span onClick={()=>handleLink('/professionals')}>Conocé a todos nuestros profesionales </span>
        </TeamContainer>
};

export default TeamList;
