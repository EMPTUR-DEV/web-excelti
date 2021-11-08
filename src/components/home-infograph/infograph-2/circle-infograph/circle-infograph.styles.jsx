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
        z-index:2000;
        border-radius: 50%;
        display: grid;
        place-items:center;
        position: relative;
        cursor:pointer;
        background-color:  var(--background) ;
        transition-property: width, height;
        transition:  0.3s ease-in;
        &:hover {
            background-color: white;
            box-shadow: 0 0 0 5px inset var(--background);
             width: calc(var(--size)*1.2);
                height: calc(var(--size)*1.2);
        };
    
    .dot{
            ${({position_stats})=>
                position_stats?
                position_stats :
                `top:  100px;right: 100px
                `
        };
        
            width: 2px;height: 2px;
            position:absolute ;
            z-index:-10;
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
            
            i {
                
                font-size: 3.5rem;
                color: ${({item_active})=>
                    item_active ? 
                    'black;':
                    'white;'
            };
            }
            span{
                ${({item_active})=>
                    item_active? 'font-size: 1.2rem;opacity: 100%; display:flex;' : 
                    'opacity: ;display:none;font-size:0.3rem;'
                }
                width:150px;
                padding: 0;
                margin:0 0 10px 0;
                
            }
        }

        transition: ease-in-out 0.2s;

        @media (max-width: 992px) {
            ${({posicion_mobile})=>
            posicion_mobile ?
            posicion_mobile :
            `top: 30px;
            left: 30px;
            margin-bottom: 50px`
        };  
        }
`
