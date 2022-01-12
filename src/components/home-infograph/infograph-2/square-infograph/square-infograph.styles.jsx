import styled, {keyframes} from 'styled-components'

const pulse = (pulseColor) => keyframes` 
    
    0% {
        -moz-box-shadow: 0 0 0 0 ${pulseColor['initial']};
        box-shadow: 0 0 0 0 ${pulseColor['initial']};
    }
    70% {
        -moz-box-shadow: 0 0 0 100px ${pulseColor['mid']};
        box-shadow: 0 0 0 100px ${pulseColor['mid']};
    }
    100% {
        -moz-box-shadow: 0 0 0 0 ${pulseColor['mid']};
        box-shadow: 0 0 0 0 ${pulseColor['mid']};
    }
`
const pulse2 =  keyframes` 
    
    0% {
        -moz-box-shadow: 0 0 0 0 #000;
        box-shadow: 0 0 0 0 #000;
    }
    70% {
        -moz-box-shadow: 0 0 0 100px #00000000;
        box-shadow: 0 0 0 100px #00000000;
    }
    
`

export const CircleContainer = styled.div`
        
        --size:  ${({size})=> size? size:'200px'}; 
        --background: ${({background})=> background? background :  "black"};
        --box-shadows: ${({box_shadows})=> box_shadows? box_shadows : 
                                        `100px 100px 0 6px var(--background), 
                                        100px 100px 0 4px var(--background),
                                        100px 100px 0 6px var(--background) `};
        
        width: var(--size);
        height: var(--size);
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
        transition-property: width, height;
        transition:  1s ease-in;
        

            
        &:hover {
            background-color: white;
            box-shadow: 0 0 0 0 inset var(--background);
            box-shadow: 0px 0px 10px 0px var(--background);
             /* width: calc(var(--size)*1.2);
                height: calc(var(--size)*1.2); */
        };
        &:before{
        position: absolute;
        content: '';
        width: 100%;
        z-index: 10;
        height: 100%;
        border-radius: 20px;
        top:0;
        left: 0;
        
        animation-name: ${({item_active,pulseColor})=> item_active?  pulse(pulseColor): 'none'};
        animation-duration: ${({item_active})=> item_active?  '4s': 'none'}; 
        animation-iteration-count:${({item_active})=> item_active?  '1': 'none'} ; 
            
                
        
    }

    @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 #000;
            box-shadow: 0 0 0 0 #000;
        }
        70% {
            -moz-box-shadow: 0 0 0 100px #00000000;
            box-shadow: 0 0 10 100px #00000000;
        }
    }

    & img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
            border-radius: 20px;
            z-index:0;
            
        }

    & .image-overlap{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 100;
            
            &::before{
                position: absolute;
                top: 0;
                left: 0;
                content: '';
                width:100%;
                border-left: solid  500px rgba(0,0,0,.5) ;
                border-bottom: ${({item_active})=> item_active?  'solid 0px rgba(0,0,0,0)':  'solid 80px rgba(0,0,0,0)'};
                height:${({item_active})=> item_active? '0px' : '30px'};
                z-index: 100;
                transition: ease-in 0.3s;
            }
            &::after{
                position: absolute;
                bottom: 0;
                left: 0;
                content: '';
                width:100%;
                border-left: solid 500px rgba(0,0,0,0);
                border-bottom: ${({item_active})=> item_active? 'solid 0px rgba(0,0,0,.5)': 'solid 80px rgba(0,0,0,.5)'};
                /* border-right: solid 500px blue;
                border-top: solid 80px rgba(0,0,0,0); */
                height: 110px;
                z-index: 100;
                transition: ease-in 0.3s;
            }
        }
        
        & .icon{
            background-color:${({item_active})=> item_active?  'rgba(255, 255, 255, 0.6 )': 'rgba(255, 255, 255, 0.15)'}; ;  
            backdrop-filter: blur(5px)/* ${({item_active})=> item_active? '0px' : 'blur(5px)'} */;
            height: ${({item_active})=> item_active?  '100%': '170px'};
            width: ${({item_active})=> item_active?  '100%': '200px'};
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
                    'black;'
            };

            }
            h3{
                text-align:center;
                overflow-wrap: break-word;
                
                ${({type_square})=>
                    type_square =='single'?  'font-size: 2rem': 'font-size: 1.5rem'};
                ${({item_active})=>
                    item_active? 'opacity: 100%; display:flex;color: var(--background);' : 
                    'opacity: ;display:flex;'
                }
                padding: 0;
                margin:0 0 10px 0;
                
            }
        }       
        transition: ease-in-out 0.2s;

        @media (max-width: 992px) {
            ${({posicion_mobile})=>
            posicion_mobile ?
            posicion_mobile :
            `top: 0px;
            left: 0px;
            `
        };  
        }
        @media (max-width: 700px) {
            height: 100%;
        }
        
`


