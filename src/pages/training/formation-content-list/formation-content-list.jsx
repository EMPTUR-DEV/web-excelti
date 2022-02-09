import React, {useState} from 'react';
import { FormationContentListContainer,FormationList, ItemContent, FormationButton,FormationDescription } from './formation-content-list.styles';

const FormationContentList = ({formationItems}) => {

    const [itemActive, setItemActive] = useState('');
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
                {formationItems.map(({title,topics,key})=> 
                <ItemContent itemActive={itemActive===key} onClick={()=>handleItemClick(key)} key={key}>
                    <FormationButton>{title}  </FormationButton>
                    {
                        itemActive ===key?                            
                            <FormationDescription>
                                {topics.map(({topicTitle,description})=>
                                    <>
                                        <h3>{topicTitle}</h3>
                                        <p>{description}</p>
                                    </>
                                )}
                                </FormationDescription>
                        :
                        ''
                    }
                </ItemContent>)}
            </FormationList>
        </FormationContentListContainer>
    )
};

export default FormationContentList;
