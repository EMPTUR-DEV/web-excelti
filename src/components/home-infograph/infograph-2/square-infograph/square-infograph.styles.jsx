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
        display: grid;
        place-items:center;
        position: relative;
        cursor:pointer;
        background-color:white;
        box-shadow: 0 0 0 500px inset var(--background);
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
        z-index: -10;
        height: 100%;
        border-radius: 20px;
        top:0;
        left: 0;
        
        animation-name: ${({item_active,pulseColor})=> item_active?  pulse(pulseColor): 'none'} ;
        animation-duration: ${({item_active})=> item_active?  '4s': 'none'}; 
        animation-iteration-count:${({item_active})=> item_active?  '1': 'none'} ;
            
                /* rgba(100,100,100,1) */
    }


    .dot{
            ${({position_stats})=>
                position_stats?
                position_stats :
                `top:  100px;right: 100px
                `
        };
        
            width: 2px;height: 2px;
            position:absolute ;
            
            background: ${({item_active})=> !item_active ? 'var(--background)' : 'white'};
            opacity: ${({item_active})=> item_active? '100%': '0%'};
            border-radius: 50%;
            box-shadow: ${({item_active}) =>    
                        item_active ?  'var(--box-shadows)'
                        :
                                        `100px 100px 0 6px var(--background), 
                                        100px 100px 0 4px var(--background),
                                        100px 100px 0 6px var(--background) `
                        };
            transition:  ease-in-out 0.2s ;
            
            }
        
        .icon{
            position: absolute;
            display: flex;
            flex-direction:column;
            justify-content: center;
            padding:10px;
            i {
                
                font-size: 3.5rem;
                color: ${({item_active})=>
                    item_active  ? 
                    'var(--background);':
                    'white;'
            };

            }
            h3{
                text-align:center;
                overflow-wrap: break-word;
                ${({item_active})=>
                    item_active? 'font-size: 1.6rem;opacity: 100%; display:flex;color: var(--background);' : 
                    'opacity: ;display:flex;font-size:1.6rem;'
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


