import React, {useState} from 'react';
import { FormationContentListContainer,FormationList, ItemContent, FormationButton } from './formation-content-list.styles';
import FormationDescription from './formation-description/formation-description'

const FormationContentList = ({handleOption,formationItems}) => {

    const [itemActive, setItemActive] = useState(1);
    const handleItemClick = (key)=>{
        if (itemActive ===key){
            setItemActive('')
        }else{
            setItemActive(key)
        }
    }
    
    return (
        <FormationContentListContainer itemActive={itemActive}>
            <FormationList >
                {formationItems.content.map((formationItem)=> 
                
                <ItemContent  itemActive={itemActive===formationItem.key} 
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
