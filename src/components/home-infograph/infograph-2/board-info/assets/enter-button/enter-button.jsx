import React from 'react'
import {EnterButtonContainer} from './enter-button.styles'

const EnterButton = ({color}) => {
    console.log(color)
    return (
        <EnterButtonContainer color={color}>
            <span> Conocer más</span>
        </EnterButtonContainer>
    )
}

export default EnterButton
