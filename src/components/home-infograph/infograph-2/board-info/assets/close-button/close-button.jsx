import React,{useState} from 'react'
import {CloseButtonContainer} from './close-button.styles'
import { FaRegWindowClose} from 'react-icons/fa'
import {IconContext} from 'react-icons'


const CloseButton = () => {

    const [closeButtonHover,setCloseButtonHover] = useState(false)

    const CLOSE_BUTTON_COLOR = 'black';
    const CLOSE_BUTTON_COLOR_HOVER = 'white';

    return (
        <CloseButtonContainer>
                    <IconContext.Provider value={{ size:'100%', color:closeButtonHover? CLOSE_BUTTON_COLOR_HOVER : CLOSE_BUTTON_COLOR }}>
                        <FaRegWindowClose />
                    </IconContext.Provider>
        </CloseButtonContainer>
    )
}

export default CloseButton
