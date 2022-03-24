import React from 'react';
import styled from 'styled-components';
import useSlideShow from '../../../hooks/useSlideShow';

const SlideshowTraining = ({ items,wide,height, linked ='#' , hasTextSlide=true}) => {
    const { next } = useSlideShow(2.5);
    const handleLink = (linked) => {
        console.log(linked)
        if(linked) {
            window.location.replace(linked)
        };
      }
      console.log(items.length)
    return (
        <PrincipalContainer wide={wide} height={height} >
            <SlideshowContainer wide={wide * items.length} ref={next()}>
                {
                    items.map(item=>
                        (
                        <Slide wide={wide}  key={item.key}>
                            <img   src={item.url} />
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
    width: ${({wide})=>`${wide*3}px` || "900px"};
    margin: 20px auto;
    max-width:100% ;
    height: ${({height})=>`${height}px` || "200px"};
    overflow:hidden;
    border-radius:10px ;
    
    @media screen and (max-width: 600px){
        width: ${({wide})=>`${wide}px` || "300px"};
    }
    @media screen and (max-width: 900px){
        width: ${({wide})=>`${wide*2}px` || "600px"};
    }

    @media screen and (min-width: 1200px){
        width: ${({wide})=>`${wide*4}px` || "1200px"};
    }
    
    
`;

const SlideshowContainer = styled.div`
    width: 3000px;
    height:100% ;
    display: flex;
    flex-wrap:nowrap;
`;

const Slide = styled.div`
    
    width: ${(props) => `${props.wide}px` || "230px"};
    height:100% ;
    overflow:hidden;
    transition: .3 ease all;
    z-index:10;
    max-height:500px;
    
    img{
        width: ${(props) => `${props.wide}px` || "230px"};
        vertical-align: top;
        object-fit:cover;
        object-position: top ;
        width: ${(props) => `${props.wide}px` || "230px"};
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

export default SlideshowTraining;