import React, {useState} from 'react'
import {CircleContainer} from './square-infograph.styles'
import {Icon,Line, ContentContainer} from '../infograph.styles'




const Square = ({size,box_shadows,position_stats,item,background,children,
                setInfoItem,setEnterButtonColor,
                pulseColor,backgroundImage,type_square}) => {
    const [item_active, setItem_active] = useState(false);

    console.log(backgroundImage)
    return (
        
            <CircleContainer background={background} size={size} 
                            
                            item_active={item_active}
                            pulseColor={pulseColor}
                            box_shadows={box_shadows} position_stats={position_stats}
                            onMouseLeave={()=>setItem_active(!item_active)} 
                            onMouseEnter={()=>setItem_active(!item_active)}
                            type_square = {type_square}
                            onClick = {()=>{    
                                    window.location.replace(item.link)
                                    /* setInfoItem(item.name)
                                    setEnterButtonColor(background)  */
                                }
                             }
                            >
                <img src= {backgroundImage} alt="" />
                <div className='dot'  />
                
                <div className='icon' >
                <i className="far fa-building">{children}</i>
                <h3>{item.name}</h3>
                </div>
                <div className="image-overlap"/>

                
            </CircleContainer>
        
    )
}

export default Square
