import styled from 'styled-components';

const ProfessionalDescription = ({professions}) =>{
    const colors ={
        Traductor:'var(--blue)',
        Interpreter:'var(--parrotGreen)',
        Teacher: 'var(--green)',
    }
      

    return (
        <ProfessionlDefinition>
            {
                professions.map((profession, i) =>(
                    (i + 1 == professions.length) ? <Color key={profession} 
                                                           type={colors[profession]}>
                                                           {` ${profession}`}
                                                    </Color>
                                                    :<Color key={profession}
                                                            type={colors[profession]}>
                                                            {` ${profession},`}
                                                    </Color>
                ))
            }
        </ProfessionlDefinition>
    )
}

export default ProfessionalDescription;

const ProfessionlDefinition =  styled.span`
    display:flex;
    flex-direction:row;   
`
const Color =  styled.div`
    color:${(props) => props.type};
    font-weight:400;
    font-size:15px;
    margin:2px;
`