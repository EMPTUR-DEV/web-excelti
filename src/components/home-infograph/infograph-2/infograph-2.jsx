import React, {useState} from 'react'

import {RiTranslate} from 'react-icons/ri'
import {RiArticleLine}  from 'react-icons/ri'
import {FiEdit3} from 'react-icons/fi'
import {GiVideoConference} from 'react-icons/gi'
import {BsHeadset} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
import {GraphicContainer,Double,Single, CenterCircleContainer} from './infograph-2.styles'
import Circle from './circle-infograph/circle-infograph'

const InfoGraph2 = ({items}) => {
  
  const large_circle_size = '200px';
  const short_circle_size = '160px';
  const colors = [ 'black',"#228855","#aaaa22",
                  "purple","rgb(223, 149, 12)","#124e4e"];
  const dots = [
    "top:0px;left: 0px" ,
    'top:0px;left: 0px',
    "top:0px;left: 0px" ,
    'top:0px;left: 0px',
    "top:0px;left: 0px" ,
    'top:0px;left: 0px',
    ]
  const box_shadows = [
    "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),250px 150px 0 6px var(--background)",
    "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),230px 150px 0 6px var(--background)",
    "0px -20px 0 6px var(--background),0px 180px 0 4px var(--background),250px 160px 0 6px var(--background)",
    "0px -30px 0 6px var(--background),-20px 180px 0 4px var(--background),200px 150px 0 6px var(--background)",
    "0px -10px 0 6px var(--background),-20px 180px 0 4px var(--background),250px 150px 0 6px var(--background)",
    "0px 30px 0 6px var(--background),-20px 130px 0 4px var(--background),250px 150px 0 6px var(--background)"
  ]

    return (
<GraphicContainer>
  
  <CenterCircleContainer>
      <Single>
        <Circle background={colors[0]} size={large_circle_size} 
                 item = {items[0]}
                box_shadows={box_shadows[0]} position_stats={dots[0]}
                >
                  <RiTranslate/>
        </Circle>
      </Single>
      <Double> 
        <Circle background={colors[1]} size={short_circle_size} 
                item={items[1]} box_shadows={box_shadows[1]}
                position_stats={dots[1]}
                >
                  <FiEdit3/>
        </Circle>
        <Circle background={colors[2]} size={large_circle_size} 
                item={items[2]} box_shadows={box_shadows[2]}
                position_stats={dots[2]}
                >
                  <RiArticleLine/>
        </Circle>
      </Double>
      <Double>
        <Circle background={colors[3]} size={short_circle_size} 
                item={items[3]} box_shadows={box_shadows[3]}
                position_stats={dots[3]}
                >
                <BsHeadset/>
        </Circle>
        <Circle background={colors[4]} size={large_circle_size} 
                item={items[4]} box_shadows={box_shadows[4]}
                position_stats={dots[4]}
                >
                  <GiVideoConference/>
        </Circle>
      </Double>
      <Single>
        <Circle background={colors[5]} size={large_circle_size} 
                item={items[5]} box_shadows={box_shadows[5]}
                position_stats={dots[5]}
                >
                  <IoIosPeople/>
        </Circle>
      </Single>
      </CenterCircleContainer>
  </GraphicContainer>

    )
}

export default InfoGraph2
