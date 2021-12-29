import styled from 'styled-components'



export const CircleContainer = styled.div`
        
        --size: ${({size})=> size? size:'200px'};
        --background: ${({background})=> background? background :  "black"};
        --box-shadows: ${({box_shadows})=> box_shadows? box_shadows : 
                                        `100px 100px 0 6px var(--background), 
                                        100px 100px 0 4px var(--background),
                                        100px 100px 0 6px var(--background) `};
        
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        display: grid;
        place-items:center;
        position: relative;
        cursor:pointer;
        background-color:white;
        box-shadow: 0 0 0 100px inset var(--background);
        transition-property: width, height;
        transition:  2s ease-in;

        
        &:hover {
            background-color: white;
            box-shadow: 0 0 0 5px inset var(--background);
             /* width: calc(var(--size)*1.2);
                height: calc(var(--size)*1.2); */
        };
        &:before{
        position: absolute;
        content: '';
        width: 100%;
        z-index: -10;
        height: 100%;
        border-radius: 100%;
        top:0;
        left: 0;
        transition: all 1s;
        ${({item_active})=> item_active? 'box-shadow:  0 0 100vw 10000px rgba(200,200,200,0.5)' :
                                        'box-shadow:  0 0 0 0 rgba(200,200,200,0.5)'};    
        
        }
            
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
            i {
                
                font-size: 3.5rem;
                color: ${({item_active})=>
                    item_active  ? 
                    'black;':
                    'white;'
            };

            }
            h3{
                text-align:center;
                ${({item_active})=>
                    item_active? 'font-size: 1.2rem;opacity: 100%; display:flex;' : 
                    'opacity: ;display:none;font-size:0.3rem;'
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
            margin-bottom: 50px`
        };  
        }
        @media (max-width: 992px) {
            width: 200px;
            height: 200px;
            margin:0;
        };  
        
`
