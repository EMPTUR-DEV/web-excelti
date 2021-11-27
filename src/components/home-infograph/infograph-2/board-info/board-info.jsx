import React,{useState} from 'react'
import { BoardInfoContainer,InfoBox,BoardBackground,Close } from './board-info.styles'
import { FaRegWindowClose} from 'react-icons/fa'
import {IconContext} from 'react-icons'

const BoardInfo = ({setShowInfo,active,info,item}) => {

    const [closeButtonHover, setCloseButtonHover] = useState(false)

    const CLOSE_BUTTON_COLOR = 'black';
    const CLOSE_BUTTON_COLOR_HOVER = 'white';

    const hover = (e) => {
        setCloseButtonHover(!closeButtonHover);
        console.log(closeButtonHover);
    }

    return (
        <BoardInfoContainer  active={active} >
            
            <BoardBackground active={active}   onClick={()=>setShowInfo(false)}/>
            <InfoBox>
                <Close onClick={()=> setShowInfo(false)}>
                    <IconContext.Provider value={{ size:'100%', color:closeButtonHover? CLOSE_BUTTON_COLOR_HOVER : CLOSE_BUTTON_COLOR }}>
                        <FaRegWindowClose />
                    </IconContext.Provider>
                </Close>
                <h3>{info}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil voluptatibus eaque est pariatur quibusdam possimus, incidunt odio distinctio nobis aspernatur, expedita velit ullam a quos earum culpa iure sapiente.</p>
            </InfoBox>
        </BoardInfoContainer>
    )
}

export default BoardInfo
