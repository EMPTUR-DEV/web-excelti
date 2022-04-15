import React,{ useState,useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {GraphicContainer,Single, CenterCircleContainer} from '../../../components/home-infograph/infograph-2/infograph.styles'
import useContent from '../../../components/shared/useContent'
import Square from '../../../components/home-infograph/infograph-2/square-infograph/square-infograph'
import {RiTranslate} from 'react-icons/ri'

import useOnScreen from '../../../hooks/intersectionObserver';


const TrainingListInfograph = ({ handleOption, trainingDic }) => {
  const { large_square_size,short_square_size,exceltiColors2,backgroundImages,exceltiColorsAlpha2,dots,box_shadows } = useContent();
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-600px");
  const [infoState,setInfoState] = useState (false)

  const history = useHistory()

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
                box_shadows={box_shadows[i]}
                history={history}
              
              >
                <RiTranslate />
              </Square>

            </Single>
              )
            }
    </CenterCircleContainer>
  </GraphicContainer>
};

export default TrainingListInfograph;
