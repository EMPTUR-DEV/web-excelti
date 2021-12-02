import React,{useState} from 'react'
import { BoardInfoContainer,InfoBox,BoardBackground } from './board-info.styles'
import CloseButton from './assets/close-button/close-button'
import EnterButton from './assets/enter-button/enter-button'

//DEL BOTON 
import {CloseButtonContainer} from './assets/close-button/close-button.styles'
import { FaRegWindowClose} from 'react-icons/fa'
import {IconContext} from 'react-icons'

const BoardInfo = ({setShowInfo,active,info,item,enterButtonColor}) => {
    const [closeButtonHover,setCloseButtonHover] = useState(false)

    const CLOSE_BUTTON_COLOR = 'black';
    const CLOSE_BUTTON_COLOR_HOVER = 'grey';
    

    return (
        <BoardInfoContainer  active={active} >
            
            <BoardBackground active={active}   onClick={()=>setShowInfo(false)}/>
            <InfoBox>
                {/* <CloseButton  onClick={()=> setShowInfo(false)}/> */}
                <CloseButtonContainer 
                    onMouseEnter ={()=>setCloseButtonHover(true)} 
                    onMouseLeave ={()=>setCloseButtonHover(false)}
                    onClick={()=> setShowInfo(false)}>
                    <IconContext.Provider value={{ size:closeButtonHover? '105%':'100%', color:closeButtonHover? CLOSE_BUTTON_COLOR_HOVER : CLOSE_BUTTON_COLOR }}>
                        <FaRegWindowClose />
                    </IconContext.Provider>
                </CloseButtonContainer>
                <h3>{info}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil voluptatibus eaque est pariatur quibusdam possimus, incidunt odio distinctio nobis aspernatur, expedita velit ullam a quos earum culpa iure sapiente.</p>
                <EnterButton color = {enterButtonColor}/>
            </InfoBox>
        </BoardInfoContainer>
    )
}

export default BoardInfo
