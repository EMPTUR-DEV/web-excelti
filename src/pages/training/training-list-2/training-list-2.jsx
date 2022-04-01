import React,{ useState,useEffect, useRef } from 'react';
import {GraphicContainer,Single, CenterCircleContainer} from '../../../components/home-infograph/infograph-2/infograph.styles'
import { large_square_size,short_square_size,exceltiColors2,backgroundImages,exceltiColorsAlpha2,dots,box_shadows } from '../../../components/shared/content'
import Square from '../../../components/home-infograph/infograph-2/square-infograph/square-infograph'
import {RiTranslate} from 'react-icons/ri'

import useOnScreen from '../../../hooks/intersectionObserver';


const TrainingListInfograph = ({ handleOption, trainingDic }) => {

  const ref = useRef();
  const onScreen = useOnScreen(ref, "-600px");
  const [infoState,setInfoState] = useState (false)

  useEffect(()=>{
    onScreen ? setInfoState(true) : setInfoState(false);
  }, [onScreen]);

  const fontH3 = '1.5rem'

  return <GraphicContainer ref={ref}>

          <CenterCircleContainer infoState={infoState} >
            {
              Object.keys(trainingDic).map((key,i)=>
              <Single>
              <Square  background={exceltiColors2[i]} size={large_square_size}
                pulseColor={exceltiColorsAlpha2[i]}
                item={trainingDic[key]}
                type_square={'single'}
                fontH3={fontH3}
                backgroundImage={''}
                hasFunctionLink ={true}
                functionLink = {handleOption}
                arg = {key}
                box_shadows={box_shadows[i]
              } 
              >
                <RiTranslate />
              </Square>

            </Single>
              )
            }
            {/*             <Single>
              <Square background={exceltiColors[6]} size={short_square_size}
                item={items[3]} box_shadows={box_shadows[3]}
                pulseColor={exceltiColorsAlpha[6]}
                backgroundImage={backgroundImages[3]}
                position_stats={dots[3]}
                type_square={'single'}
                hasFunctionLink ={true}
                functionLink = {handleOption}
                arg = {'coaching'}
                setEnterButtonColor={setEnterButtonColor}
                setInfoItem={setInfoItem}
              >
                <BsHeadset />
              </Square>
            </Single>
            <Single>
              <Square background={exceltiColors[3]} size={large_square_size}
                item={items[1]} box_shadows={box_shadows[1]}
                pulseColor={exceltiColorsAlpha[3]}
                backgroundImage={backgroundImages[1]}
                position_stats={dots[1]}
                type_square={'single'}
                hasFunctionLink ={true}
                functionLink = {handleOption}
                arg = {'curso'}
                setEnterButtonColor={setEnterButtonColor}
                setInfoItem={setInfoItem}
              >
                <FiEdit3 />
              </Square>

            </Single> */}
    </CenterCircleContainer>
  </GraphicContainer>
};

export default TrainingListInfograph;
