import React,{ useRef,useEffect,useState } from 'react';
import styled from 'styled-components';

const Slideshow = ({ time,items,wide }) => {
    
    const [ duration, setDuration ] = useState(((time || 1)*1000));

    const slideshow = useRef(null);
    const intervalSlideshow = useRef(null);

    const next = () => {
        if(slideshow?.current?.children?.length > 0) {
            const [ firstElement,...restElements ] = slideshow.current.children;

            slideshow.current.style.transition = `${duration}ms ease-out all`;
            
            const SlideSize = firstElement.offsetWidth;

            slideshow.current.style.transform = `translateX(-${SlideSize}px)`;
            
            const transitionON = () =>{
                slideshow.current.style.transition = 'none';
            
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(firstElement);
            }

            slideshow.current.addEventListener('transitionend',transitionON);
        }
    };
    
    useEffect(()=>{
        intervalSlideshow.current = setInterval(()=>{
            next();
        }, duration);

    },[]);

    return (
        <PrincipalContainer wide={wide}>
            <SlideshowContainer ref={slideshow}>
                {
                    items.map(item=>
                        (
                        <Slide key={item.key}>
                            <img src={item.url} />
                            <TextSlide>{item.name}</TextSlide>
                        </Slide>
                        )
                    )
                }
            </SlideshowContainer>
        </PrincipalContainer>
    );
}

const PrincipalContainer = styled.div`
    max-width: ${(props) => `${props.wide}px` || "150px"};
    overflow:hidden;
`;

const SlideshowContainer = styled.div`
    display: flex;
    flex-wrap:nowrap;
`;

const Slide = styled.div`
    min-width:100%;
    overflow:hidden;
    transition: .3 ease all;
    z-index:10;
    max-height:500px;
    position:relative;
    img{
        vertical-align: top;
        object-fit:cover;
        width: 100%;
        height:100%;
    }
`;

const TextSlide = styled.div`
    background:rgba(0,0,0,.5);
    color:#fff;
    width: 100%;
    padding: 10px 60pxl
    text-align:center;
    position:absolute;
    bottom:0;
    overflow:auto;
    font-size:80%;
`;

export default Slideshow;