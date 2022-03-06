import React, {useState, useRef, useEffect} from 'react';
import useOnScreen from '../../../hooks/intersectionObserver';


import FormationDescription from './formation-description/formation-description'
import {    FormationContentListContainer,
            FormationList, 
            ItemContent,
            FormationButton } from './formation-content-list.styles';
    

const FormationContentList = ({handleOption,formationItems}) => {
        
    const [itemActive, setItemActive] = useState(1);
    const [startArrow, setstartArrow] = useState(false);
    const [endArrow, setendArrow] = useState(true);
    
    const refEnd = useRef()
    const onScreenEnd = useOnScreen(refEnd,"-100px")
    const refStart = useRef()
    const onScreenStart = useOnScreen(refStart,"-100px")
        /* 
    useEffect(()=>{
        onScreen ? setStyle(styles.show) : setStyle(styles.notShow);
    }, [onScreen]); */
    
    const handleItemClick = (key)=>{
        if (itemActive ===key){
            setItemActive('')
        }else{
            setItemActive(key)
        }
    }
    
    return (
        <FormationContentListContainer itemActive={itemActive}>
            <FormationList arrowActiveStart = {!onScreenStart} arrowActiveEnd = {!onScreenEnd}>
                {formationItems.content.map((formationItem)=> 
                
                <ItemContent ref={formationItem.key ===6 ? refEnd : formationItem.key===1 ? refStart :null }  itemActive={itemActive===formationItem.key} 
                                onClick={()=>handleItemClick(formationItem.key)} key={formationItem.key}>
                    <FormationButton key={formationItem.key} ><h4>{formationItem.title}</h4>  </FormationButton>
                </ItemContent>)}
            </FormationList>
                {formationItems.content.map((formationItem)=>
                    {
                        if (formationItems.key ==='curso'){
                        return(
                        itemActive ===formationItem.key?                            
                            <FormationDescription handleItemClick= {handleItemClick} key={formationItem.key}  formationItem= {formationItem}/>
                        :
                        '')}
                    })
                }
            
        </FormationContentListContainer>
    )
};

export default FormationContentList;
