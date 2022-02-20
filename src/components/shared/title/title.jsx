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
`