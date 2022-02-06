import React, {useState} from 'react';
import { FormationContentListContainer,FormationList, ItemContent, FormationButton,FormationDescription } from './formation-content-list.styles';

const FormationContentList = ({formationItems}) => {

    const [itemActive, setItemActive] = useState('');
    console.log(itemActive!='')
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
                {formationItems.map(({title,description,key})=> 
                <ItemContent itemActive={itemActive===key} onClick={()=>handleItemClick(key)} key={key}>
                    <FormationButton>{title}  </FormationButton>
                    {
                        itemActive ===key?
                        <FormationDescription>{description}</FormationDescription>:
                        ''
                    }
                </ItemContent>)}
            </FormationList>
        </FormationContentListContainer>
    )
};

export default FormationContentList;
