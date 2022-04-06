import React, {useState,useEffect,useRef} from 'react'

import {RiTranslate} from 'react-icons/ri'
import {RiArticleLine}  from 'react-icons/ri'
import {FiEdit3} from 'react-icons/fi'
import {GiVideoConference} from 'react-icons/gi'
import {BsHeadset} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
import {GraphicContainer,Double,Single, CenterCircleContainer,Full} from './infograph.styles'
import Square from './square-infograph/square-infograph'
import useOnScreen from '../../../hooks/intersectionObserver';
import useContent from '../../shared/useContent';

const InfoGraph = ({items}) => {
  const { large_square_size,short_square_size,exceltiColors,backgroundImages,exceltiColorsAlpha,dots,box_shadows }  = useContent();

  const [showInfo,setShowInfo] = useState(false)
  const [infoToShow,setInfoToShow] = useState('')
  const [enterButtonColor,setEnterButtonColor] = useState('#338')
  const [infoState,setInfoState] = useState(false)

  const ref = useRef();
  const onScreen = useOnScreen(ref, "-1000px");

  useEffect(()=>{
    onScreen ? setInfoState(true) : setInfoState(false);

  }, [onScreen]);


  const setInfoItem = (item)=>{
    setInfoToShow(item)
    setShowInfo(!showInfo)   
  } 
    return (
    <GraphicContainer ref={ref}>
      
      {/* <BoardInfo  enterButtonColor = {enterButtonColor} 
                  setShowInfo={setShowInfo}  
                  active = {showInfo} 
                  info={infoToShow} />  */}
      
      <CenterCircleContainer infoState={infoState} >

           <Single>
            <Square background={exceltiColors[1]} size={large_square_size} 
                    pulseColor = {exceltiColorsAlpha[1]}
                    item = {items[0]} 
                    type_square = {'single'}
                    backgroundImage = {backgroundImages[0]}
                    setInfoItem= {setInfoItem}
                    
                    box_shadows={box_shadows[0]} position_stats={dots[0]}
                    >
                  <RiTranslate />
            </Square>
            
          </Single>
          <Single>
            <Square background={exceltiColors[6]} size={short_square_size} 
                    item={items[3]} box_shadows={box_shadows[3]}
                    pulseColor = {exceltiColorsAlpha[6]}
                    backgroundImage = {backgroundImages[3]}
                    position_stats={dots[3]}
                    type_square = {'single'}
                    setEnterButtonColor = {setEnterButtonColor}
                    setInfoItem= {setInfoItem}
                    >
                    <BsHeadset/>
            </Square>
          </Single> 
          <Single>
          <Square background={exceltiColors[3]} size={large_square_size} 
                    item={items[1]} box_shadows={box_shadows[1]}
                    pulseColor = {exceltiColorsAlpha[3]}               
                    backgroundImage = {backgroundImages[1]}
                    position_stats={dots[1]}
                    type_square = {'single'}
                    setEnterButtonColor = {setEnterButtonColor}
                    setInfoItem= {setInfoItem}
                    >
                    <FiEdit3/>
            </Square>
            
          </Single>
          {/* <Single> 
            
            <Square background={exceltiColors[2]} size={short_square_size} 
                    item={items[2]} box_shadows={box_shadows[2]}
                    pulseColor = {exceltiColorsAlpha[2]}
                    position_stats={dots[2]}
                    type_square = {'single'}
                    backgroundImage = {backgroundImages[2]}
                    setInfoItem= {setInfoItem}
                    setEnterButtonColor = {setEnterButtonColor}
                    >
                    <RiArticleLine/>
            </Square>
            </Single>
           */}  
           
          {/* <Double>
            
            <Square background={exceltiColors[4]} size={short_square_size} 
                    item={items[4]} box_shadows={box_shadows[4]}
                    pulseColor = {colors_alpha_pulse[4]}
                    backgroundImage = {backgroundImages[4]}
                    position_stats={dots[4]}
                    setEnterButtonColor = {setEnterButtonColor}
                    setInfoItem= {setInfoItem}
                    >
                    <GiVideoConference/>
            </Square>
            <Square background={exceltiColors[5]} size={short_square_size} 
                    item={items[5]} box_shadows={box_shadows[5]}
                    pulseColor = {colors_alpha_pulse[5]}
                    backgroundImage = {backgroundImages[5]}
                    position_stats={dots[5]}
                    setInfoItem= {setInfoItem}
                    setEnterButtonColor = {setEnterButtonColor}
                    >
                    <IoIosPeople/>
            </Square>
          </Double>
           */}
     

           </CenterCircleContainer>
      </GraphicContainer>
    )
}

export default InfoGraph

         