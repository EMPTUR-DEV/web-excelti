import React from 'react';
import { TeamContainer, List } from '../../../components/shared/team-list/team-list.styles';

const TraductionTeam = () => {


  return <TeamContainer>
      <h3>Equipo de traductores</h3>
      <List>
          {team.map(prof => <li>{prof}</li>)}
      </List>
  </TeamContainer>;
};

export default TraductionTeam
