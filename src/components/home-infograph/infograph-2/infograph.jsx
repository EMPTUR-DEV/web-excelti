import React, {useState,useEffect,useRef} from 'react'

import {RiTranslate} from 'react-icons/ri'
import {RiArticleLine}  from 'react-icons/ri'
import {FiEdit3} from 'react-icons/fi'
import {GiVideoConference} from 'react-icons/gi'
import {BsHeadset} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
import {GraphicContainer,Double,Single, CenterCircleContainer} from './infograph.styles'
import Square from './square-infograph/square-infograph'
import useOnScreen from '../../../hooks/intersectionObserver';


const InfoGraph = ({items}) => {
  
  const large_square_size = '100%';
  const short_square_size = '100%';
  
  const colors = [ '#995522',"#228855","#124e99",
                  "purple","rgb(200, 30, 40)","#124e4e"];


  const backgroundImages = ['home/traduction-background.jpg',
                            'home/learning-background.jpg',
                            'home/learning-background.jpg',
                            'home/servicios-audiovisuales-background.jpg',
                            'home/professional-background.jpg',
                            'home/professional-background.jpg'
                          ]
  
  const exceltiColors = [ 'rgb(6,107,153)',
                          'rgb(18,134,193)',
                          'rgb(0,152,219)',
                          'rgb(21,178,185)',
                          'rgb(9,174,140)',
                          'rgb(36,181,122)',
                          'rgb(68,169,37)',
                          'rgb(52,150,91)',


                        ]  
  
  const colors_alpha_pulse = [{'initial':'rgba(0,0,0,0.5)',
                                'mid':'rgba(0,0,0,0)'},
                              {'initial':'rgba(34,136,85,0.5)',
                                'mid':'rgba(34,136,85,0)'},
                              {'initial':'rgba(18, 78, 153,0.5)',
                                'mid': 'rgba(18, 78, 153,0)'},
                              {'initial':'rgba(50,0,50,0.5)',
                                'mid':'rgba(50,0,50,0)'},
                              {'initial':'rgba(200, 30, 40,0.5)',
                                'mid':'rgba(200, 30, 40,0)'},
                              {'initial':'rgba(7.1, 30.6, 30.6,0.5)',
                                'mid':'rgba(7.1, 30.6, 30.6,0)'}
                              ];

  const dots = [
    "top:0px;left: 0px" ,
    'top:0px;left: 0px',
    "top:0px;left: 0px" ,
    'top:0px;left: 0px',
    "top:0px;left: 0px" ,
    'top:0px;left: 0px',
    ]
  const box_shadows = [
    "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),220px 150px 0 6px var(--background)",
    "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),230px 150px 0 6px var(--background)",
    "0px -20px 0 6px var(--background),0px 180px 0 4px var(--background),230px 160px 0 6px var(--background)",
    "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),200px 150px 0 6px var(--background)",
    "0px -10px 0 6px var(--background),-20px 180px 0 4px var(--background),250px 150px 0 6px var(--background)",
    "0px 30px 0 6px var(--background),-20px 130px 0 4px var(--background),250px 150px 0 6px var(--background)"
  ]

  const [showInfo,setShowInfo] = useState(false)
  const [infoToShow,setInfoToShow] = useState('')
  const [enterButtonColor,setEnterButtonColor] = useState('#338')
  const [infoState,setInfoState] = useState(false)

  const ref = useRef();
  const onScreen = useOnScreen(ref, "-1000px");

  useEffect(()=>{
    onScreen ? setInfoState(true) : setInfoState(false);
    console.log(onScreen)

  }, [onScreen]);


  const setInfoItem = (item)=>{
    setInfoToShow(item)
    setShowInfo(!showInfo)   
    console.log(showInfo) 
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
                    pulseColor = {colors_alpha_pulse[0]}
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
          <Square background={exceltiColors[6]} size={large_square_size} 
                    item={items[1]} box_shadows={box_shadows[1]}
                    pulseColor = {colors_alpha_pulse[1]}
                    type_square = {'single'}
                    backgroundImage = {backgroundImages[1]}
                    position_stats={dots[1]}
                    setEnterButtonColor = {setEnterButtonColor}
                    setInfoItem= {setInfoItem}
                    >
                    <FiEdit3/>
            </Square>
            
          </Single>
          <Single> 
            
            <Square background={exceltiColors[2]} size={short_square_size} 
                    item={items[2]} box_shadows={box_shadows[2]}
                    pulseColor = {colors_alpha_pulse[2]}
                    position_stats={dots[2]}
                    type_square = {'single'}
                    backgroundImage = {backgroundImages[2]}
                    setInfoItem= {setInfoItem}
                    setEnterButtonColor = {setEnterButtonColor}
                    >
                    <RiArticleLine/>
            </Square>
            </Single>
            <Single>
            <Square background={exceltiColors[3]} size={short_square_size} 
                    item={items[3]} box_shadows={box_shadows[3]}
                    pulseColor = {colors_alpha_pulse[3]}
                    backgroundImage = {backgroundImages[3]}
                    position_stats={dots[3]}
                    type_square = {'single'}
                    setEnterButtonColor = {setEnterButtonColor}
                    setInfoItem= {setInfoItem}
                    >
                    <BsHeadset/>
            </Square>
          </Single> 
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

         