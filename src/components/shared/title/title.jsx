import React from 'react';
import styled from 'styled-components'

const Title = ({title,color}) => {
    return(<Container color={color}>
        {title}
    </Container>)
}

export default Title;

const Container = styled.h1`
   color:${props => `var(--${props.color})`};
   @media (max-width: 800px) {
       font-size: 1.2em;
       padding: 1%;
   }
`