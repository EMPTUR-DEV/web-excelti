import React, {useRef, useState, useEffect} from 'react'
import {CircleContainer} from './square-infograph.styles'



const Square = ({size,box_shadows,item,background,children,
                pulseColor,backgroundImage,type_square,hasFunctionLink=false,functionLink=undefined, arg, fontH3,history }) => {

    const [itemActive, setItemActive] = useState(false);
    const pulse = useRef(null);
    
    const shadow = ()=>{
/*         pulse.current.style.boxShadow =`0px 0px 10px 0px ${background}` */    
            pulse.current.style.outline =`solid 2px ${background}`
    }
    const shadowOff = ()=>{
        /* pulse.current.style.boxShadow =`none` */
        pulse.current.style.outline =`solid 2px rgba(255,255,255,0)`
    } 
    
    useEffect(()=>{
        const animation = () =>{
            itemActive ? pulse.current.addEventListener('transitionend',shadow)
            : pulse.current.addEventListener('transitionend',shadowOff);

        };
        animation();
    },[itemActive]);
    
    console.log(hasFunctionLink)
    
    const changeWindow =(link) =>{
        if (hasFunctionLink)  functionLink(arg);
        if (link[0] != "#")
            history.push(link); 
        window.location.replace(link);
    }

    return (
        
            <CircleContainer background={background} size={size} 
                            ref={pulse}
                            item_active={itemActive}
                            pulseColor={pulseColor}
                            box_shadows={box_shadows}
                            onMouseLeave={()=>setItemActive(!itemActive)} 
                            onMouseEnter={()=>setItemActive(!itemActive)}
                            type_square = {type_square}
                            fontH3 = {fontH3}
                            onClick = {()=>changeWindow(item.link)}
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
