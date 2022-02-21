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
    return (
        <FormationContentListContainer itemActive={itemActive!=''}>
            <FormationList >
                {formationItems.map((formationItem)=> 
                
                <ItemContent    itemActive={itemActive===formationItem.key} 
                                onClick={()=>handleItemClick(formationItem.key)} key={formationItem.key}>

                    <FormationButton >{formationItem.title}  </FormationButton>
                    {
                        itemActive ===formationItem.key?                            
                            <FormationDescription formationItem= {formationItem}/>
                        :
                        ''
                    }
                </ItemContent>)}
            </FormationList>
        </FormationContentListContainer>
    )
};

export default FormationContentList;
