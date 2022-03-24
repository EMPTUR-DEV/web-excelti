import React from 'react';
import styled from 'styled-components';
import useSlideShow from '../../../hooks/useSlideShow';

const Slideshow = ({ items,wide, linked ='#' , hasTextSlide=true}) => {
    const { next } = useSlideShow(2.5);
    const handleLink = (linked) => {
        console.log(linked)
        if(linked) {
            window.location.replace(linked)
        };
      }
    return (
        <PrincipalContainer wide={wide}>
            <SlideshowContainer ref={next()}>
                {
                    items.map(item=>
                        (
                        <Slide key={item.key}>
                            <img  onClick={()=>handleLink(linked)} src={item.url} />
                            {hasTextSlide ? <TextSlide>{item.name}</TextSlide>: ''}
                        </Slide>
                        )
                    )
                }
            </SlideshowContainer>
        </PrincipalContainer>
    );
}

const PrincipalContainer = styled.div`
    max-width: ${(props) => `${props.wide}px` || "230px"};
    overflow:hidden;
    border-radius:10px ;
    cursor:pointer ;
`;

const SlideshowContainer = styled.div`
border-radius:10px;
    display: flex;
    flex-wrap:nowrap;
`;

const Slide = styled.div`
border-radius:10px;
    min-width:100%;
    overflow:hidden;
    transition: .3 ease all;
    z-index:10;
    max-height:500px;
    position:relative;
    img{
        vertical-align: top;
        object-fit:cover;
        object-position: center ;
        width: 100%;
        height:100%;
    }
`;

const TextSlide = styled.div`
    background:rgba(0,0,0,.5);
    color:#fff;
    width: 100%;
    padding: 10px 10px;
    text-align:center;
    position:absolute;
    bottom:0;
    
    font-size:80%;
`;

export default Slideshow;