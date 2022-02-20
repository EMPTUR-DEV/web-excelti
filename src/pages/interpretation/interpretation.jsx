import React from 'react';
import styled from 'styled-components'
import InterpretationBanner from './interpretaton-banner/interpretation-banner'
import TeamList from '../../components/shared/team-list/team-list';
import Title from '../../components/shared/title/title';

const InterpretationPage = () => {

  const interpretationBannerContent = [
    { 'title':'Asesoramiento en interpretacion',
      'content': 'Asesoramiento para organizadores de conferencias, empresas, organizaciones y otros clientes en materia de contratación de intérpretes. Formación y gestión de equipos de intérpretes en congresos, convenciones, seminarios, actividades de capacitación, negociaciones, conferencias de prensa y otro tipo de reuniones en las que los participantes de diversas lenguas y culturas requieran la interpretación para poder comunicarse.  Asesoramiento sobre otros servicios audiovisuales relacionados con la interpretación.',
      'image':'/interpretation/simultanea21.jpg',
      'alt':'asesoramiento'
    },
    { 'title':'Simultánea',
      'content': 'Los intérpretes trabajan en una cabina, aislados acústicamente del resto de la reunión, y se valen del equipamiento específico para este servicio para interpretar a los oradores de manera simultánea.',
      'image':'/interpretation/simultanea21.jpg',
      'alt':'simultanea'
    },
    { 'title': 'Intérprete consultora',
      'content':'Asesoramiento para organizadores de conferencias, empresas, organizaciones y otros clientes en materia de contratación de intérpretes. Formación y gestión de equipos de intérpretes en congresos, convenciones, seminarios, actividades de capacitación, negociaciones, conferencias de prensa y otro tipo de reuniones en las que los participantes de diversas lenguas y culturas requieran la interpretación para poder comunicarse.  Asesoramiento sobre otros servicios audiovisuales relacionados con la interpretación.',
      'image': '/interpretation/interprete_consultora21a.jpg',
      'alt':'consultora'    
    },
    { 'title':'Consecutiva',
      'content': 'El intérprete se ubica al lado de los delegados o del orador e interpreta una vez que éstos concluyen cada una de sus intervenciones.',
      'image':'/interpretation/consecutivas21.jpg',
      'alt':'consecutiva'
    },
    { 'title':'Susurrada',
      'content': 'Interpretación simultánea sin equipamiento. El intérprete susurra la traducción para un número reducido de asistentes situados en la proximidad.',
      'image':'/interpretation/susurrada21.png',
      'alt':'susurrada'
    },
    { 'title':'Interpretación Remota',
      'content': 'Los participantes de la reunión se encuentran en diferentes sedes y se comunican a través de medios de telecomunicación, plataformas de videoconferencias o de interpretación.',
      'image':'/interpretation/interpretacionremota21.png',  
      'alt':'susurrada'
    },
    { 'title':'Eventos híbridos',
    'content': 'Modalidad en la que se combina la interpretación presencial con la virtual. ',
    'image':'/interpretation/hibridos21.jpg',  
    'alt':'hibridos'
  },
  { 'title':'Actuación pericial',
    'content': 'Servicios de traductores públicos con peritos intérpretes.',
    'image':'/interpretation/interpretacionremota21.png',  
    'alt':'peritos'
  }    
  ]
  const professionals = [
  /* 'Cynthia Abad Quintalé',
  'Olga Álvarez',
  'Cristina Cucchi', */
  'Violeta Harfuch',
  'Isolda Rodriguez Villegas',
  'Laura Tavolai',
  'Vivien Perez Moran'
  
]

  return <InterpretationPageContainer>
            
            <Title title={'Interpretacion'} color={'parrotGreen'}/>

            {interpretationBannerContent.map(({title,content,image,alt}) => 
                                            <InterpretationBanner key={title} title={title} content = {content}
                                                                  image={image} alt={alt} />)}
            <TeamList teamTitle='intérpretes' teamList={professionals}/>
            
        </InterpretationPageContainer>;
};

export default InterpretationPage;

const InterpretationPageContainer = styled.div`
    margin-top: 100px;
    align-items: center;

    & > :nth-child(2n+2){
        flex-direction: row-reverse;
    }


`

