import React, {useState} from 'react';
import { FormationContentListContainer,FormationList, ItemContent, FormationButton } from './formation-content-list.styles';
import FormationDescription from './formation-description/formation-description'

const FormationContentList = ({formationItems}) => {

    const [itemActive, setItemActive] = useState(1);
    const handleItemClick = (key)=>{
        if (itemActive ===key){
            setItemActive('')
        }else{
            setItemActive(key)
        }
    }
    console.log(formationItems)
    return (
        <FormationContentListContainer itemActive={itemActive}>
            <FormationList >
                {formationItems.map((formationItem)=> 
                
                <ItemContent    itemActive={itemActive===formationItem.key} 
                                onClick={()=>handleItemClick(formationItem.key)} key={formationItem.key}>

                    <FormationButton ><h4>{formationItem.title}</h4>  </FormationButton>
                    
                </ItemContent>)}
            </FormationList>
                {formationItems.map((formationItem)=>
                    {
                    return(
                        itemActive ===formationItem.key?                            
                            <FormationDescription formationItem= {formationItem}/>
                        :
                        '')
                    })
                }
            
        </FormationContentListContainer>
    )
};

export default FormationContentList;
