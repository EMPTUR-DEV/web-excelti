import React, {useState, useRef, useEffect} from 'react';
import useOnScreen from '../../../hooks/intersectionObserver';


import FormationDescription from './formation-description/formation-description'
import {    FormationContentListContainer,
            FormationList, 
            ItemContent,
            FormationButton, 
            FormationDescriptionWrapper} from './formation-content-list.styles';
import FormationModalidad from './formation-description/formation-modalidad';
    

const FormationContentList = ({ formationItems}) => {
        
    const [itemActive, setItemActive] = useState(1);
    
    const scrollToRef = () =>  refScroll.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const refScroll = useRef();

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
            console.log(itemActive)
            scrollToRef()
        }
    }
    
    return (
        <FormationContentListContainer itemActive={itemActive}>
            <FormationList ref={refScroll} arrowActiveStart = {!onScreenStart} arrowActiveEnd = {!onScreenEnd}>
            {formationItems.key ==='curso' ?formationItems.content.map((formationItem)=> 
                {
                    
                 return(   <ItemContent ref={formationItem.key ===6 ? refEnd : formationItem.key===1 ? refStart :null }  
                                itemActive={itemActive===formationItem.key} 
                                onClick={()=>handleItemClick(formationItem.key)} key={formationItem.key}>
                    <FormationButton key={formationItem.key} ><h4>{formationItem.title}</h4>  </FormationButton>
                </ItemContent>)}):''}
            </FormationList>
                {
                formationItems.key ==='curso' ?
                    formationItems.content.map((formationItem)=>
                    {
                        
                        return(                                
                            itemActive === formationItem.key?                            
                            <FormationDescription   handleItemClick= {handleItemClick} key={formationItem.key}  formationItem= {formationItem}/>:'')
                    }):
                formationItems.key ==='modalidad' ?
                            <FormationModalidad   key={formationItems.key}  formationItem= {formationItems}/>
                        :''
                    
                        
                }
                
        </FormationContentListContainer>
    )
};

export default FormationContentList;
