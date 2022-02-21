import React from 'react';
import styled from 'styled-components';
import useSlideShow from '../../../hooks/useSlideShow';

const Slideshow = ({ items,wide }) => {
    const { next } = useSlideShow(2.5);

    return (
        <PrincipalContainer wide={wide}>
            <SlideshowContainer ref={next()}>
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