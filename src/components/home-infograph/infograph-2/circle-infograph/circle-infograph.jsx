import React, {useState} from 'react'
import {CircleContainer} from './circle-infograph.styles'
import {Icon,Line, ContentContainer} from '../infograph-2.styles'

const Circle = ({size,box_shadows,position_stats,item,background,children,setInfoItem,setEnterButtonColor}) => {
    const [item_active, setItem_active] = useState(false);
    return (
            <CircleContainer background={background} size={size} 
                            item_active={item_active}
                            
                            box_shadows={box_shadows} position_stats={position_stats}
                            onMouseLeave={()=>setItem_active(!item_active)} 
                            onMouseEnter={()=>setItem_active(!item_active)}
                            onClick = {()=>{
                                
                                    setInfoItem(item.name)
                                    setEnterButtonColor(background)
                                
                                }
                             }
                            >

                <div className='dot'  />
                <div className='icon' >
                <i className="far fa-building">{children}</i>
                <h3>{item.name}</h3>
                </div>
                <ContentContainer>
                <Line/>
                <h2>{item.name}</h2>
                <div className="content">
                    <h3>option infographic</h3>
                    <p>Texto de la sección</p>
                </div>
                </ContentContainer>
            </CircleContainer>

    )
}

export default Circle
