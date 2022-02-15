import styled, {keyframes} from 'styled-components'

const pulse = (pulseColor,range) => keyframes` 
    
    0% {
        -moz-box-shadow: 0 0 0 0 ${pulseColor['initial']};
        box-shadow: 0 0 0 0 ${pulseColor['initial']};
        outline: solid 2px ${pulseColor['initial']};
    }
    40% {
        -moz-box-shadow: 0 0 0 ${range} ${pulseColor['mid']};
        box-shadow: 0 0 0 ${range} ${pulseColor['mid']};
        /* border: solid 2px ${pulseColor['initial']}; */
    }
    100% {
        -moz-box-shadow: 0 0 0 0 ${pulseColor['mid']};
        box-shadow: 0 0 0 0 ${pulseColor['mid']};
        
    }
`

export const CircleContainer = styled.div`
        
        --size:  ${({size})=> size? size:'200px'}; 
        --background: ${({background})=> background? background :  "black"};
        --box-shadows: ${({box_shadows})=> box_shadows? box_shadows : 
                                        `100px 100px 0 6px var(--background), 
                                        100px 100px 0 4px var(--background),
                                        100px 100px 0 6px var(--background) `};
        
        width: 300px;
        height: 300px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        place-items:center;
        position: relative;
        cursor:pointer;
        background-color:white;
        box-shadow: 0 0 0 500px inset var(--background);
        overflow: hidden;
        transition-property: width, height, background-color, box-shadow;
        transition: width height background-color box-shadow  1s ease-in;
        outline: solid 2px rgba(255,255,255,0);
                
        &:hover {
            background-color: white;
        };
        &:before{
        position: absolute;
        content: '';
        width: 100%;
        z-index: 10;
        height: 100%;
        border-radius: 20px;
        top: 0px;
        left: 0;
        
        }

        animation-name: ${({item_active,pulseColor})=> item_active?  pulse(pulseColor, '15px'): ''};
        animation-duration: ${({item_active})=> item_active?  '1.5s': '0'}; 
        animation-iteration-count:${({item_active})=> item_active?  '1': '0'} ;   
    
    

    & img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
            border-radius: 20px;
            z-index:0;
            
        }

    & .image-overlap{
            --width-overlap:300px;
            --height-overlap: 50px;
            position: absolute;
            width:100%;
            height:100%;            
            z-index: 200;

            @media (min-width: 1200px) {
                --width-overlap:380px;
                --height-overlap: 40px;
            }
            
            @media (max-width: 992px) {
                --width-overlap:250px;
                --height-overlap: 40px;
            }
            @media (max-width: 700px) {
                --width-overlap:350px;
                --height-overlap: 40px;
            }
            &::before{
                position: absolute;
                top: 0;
                left: 0;
                content: '';
                width:var(--width-overlap);
                border-left: solid var(--width-overlap) var(--background);  /* rgba(0,0,0,.5) ; */
                border-bottom: ${({item_active})=> item_active?  'solid 0px rgba(0,0,0,0)':  'solid var(--height-overlap) rgba(0,0,0,0)'};
                height: 0px;/* ${({item_active})=> item_active? '0px' : 'var(--height-overlap)'}; */
                z-index: 100;
                transition: ease-in 0.3s;
            }
            &::after{
                position: absolute;
                bottom: 0;
                left: 0;
                content: '';
                width:var(--width-overlap);
                border-left: solid var(--width-overlap) rgba(0,0,0,0);
                border-bottom: ${({item_active})=> item_active? 'solid 0px var(--background)': ' solid var(--height-overlap) var(--background)'};
                height: var(--height-overlap);
                z-index: 100;
                transition: ease-in 0.3s;
            }
        }
        
        & .icon{
            background-color:${({item_active})=> item_active?  'rgba(255, 255, 255, 0.9 )': 'rgba(255, 255, 255, 0.5)'}; ;  
            backdrop-filter: blur(5px)/* ${({item_active})=> item_active? '0px' : 'blur(5px)'} */;
            ${({item_active})=> item_active? 
            `height: 100%;
            width: 100%;
            `
            : 
            `height: 100%;
            width: 100%;
            `};
            
            border-radius: 15px;
            position: absolute;
            
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            padding:10px;
            transition: 0.3s ease-in ;
            
            i {
                
                font-size: 4rem;
                color: ${({item_active})=>
                    item_active  ? 
                    'var(--background);':
                    'var(--background);'
            };
                color:black;


            }
            h3{
                text-align:center;
                overflow-wrap: break-word;
                color: black;//var(--background);
                font-size: 2rem;
                ${({item_active})=>
                    item_active? 'opacity: 100%; display:flex;color: var(--background);' : 
                    'opacity: ;display:flex;'
                }
                padding: 0;
                margin:0 0 10px 0;
                @media (max-width: 992px) {
                    font-size:1.5rem;
                }


            }
        }       
        transition: ease-in-out 0.2s;

        margin:10px;

        @media (min-width: 1200px) {
            width: 380px;
            height: 380px;
        }
        @media (max-width: 992px) {
            ${({posicion_mobile})=>
            posicion_mobile ?
            posicion_mobile :
            `top: 0px;
            left: 0px;
            `
        };  
            margin:5px;
            width: 250px;
            height: 250px;
            

        }
        @media (max-width: 700px) {
            width: 350px;
            height: 350px;
        }
        @media (max-width: 400px) {
            width: 350px;
            height: 350px;
        }
`


