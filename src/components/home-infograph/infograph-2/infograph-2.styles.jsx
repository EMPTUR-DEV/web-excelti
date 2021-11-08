import styled from 'styled-components'


export const GraphicContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
    position: relative;
    margin: 100px 0;
    
`

export const CenterCircleContainer =styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 20px;
        height: 100%;
        width: 100%;
        
        @media (max-width: 992px) {
            width: 100%;
            height: 100%;
            display: grid;
            flex-direction: column;
            position: relative;
        }
`

export const Single = styled.div`

    gap: 20px;

        @media (max-width: 992px) {
            position: relative;
            margin-bottom: 50px;
            width: 100%;
            height: 100%;
            display: block;
        }
`

export const Circle = styled.div`
        
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
        background-color:  var(--background) ;

        transition-property: width, height;
        transition:  0.3s ease-in;
        &:hover {
            background-color: white;
            box-shadow: 0 0 0 5px inset var(--background);
             width: calc(var(--size)*1.2);
                height: calc(var(--size)*1.2);
        };
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

export const Double = styled.div`
        display: flex;
        flex-direction: column;
        z-index:10;
        gap: 20px;
        
        &:nth-child(even) {
            flex-direction: column-reverse;
        }
        @media (max-width: 992px) {
            position: relative;
            margin-bottom: 100px;
            flex-direction: column;
            width: 100%;
            height: 100%;
            &:nth-child(even) {
                flex-direction: column;
            }
        }
`

export const Icon = styled.div`
            position: absolute;
            
            
            i {
                
                font-size: 3.5rem;
                color: ${({item_active})=>
                    item_active ? 
                    'black;':
                    'white;'
            };
            }
            h3{
                ${({item_active})=>
                    item_active? 'font-size: 1.2rem;opacity: 100%; display:flex;' : 
                    'opacity: 0%; color:#228855;display:none;font-size:0.3rem;'
                }
                
                padding: 0;
                margin:0 0 10px 0;
                
            }
            transition: ease-in-out 0.2s;
`


export const ContentContainer = styled.div`
    display: none;
    right: 200px;
    top: var(--gap);
    text-align: right;
    h2 {
        border: 4px solid var(--color-3);
        border-radius: 15px;
        &::after {
            background: var(--color-3);
        }
        &::before {
            background: var(--color-3);
        }
    }

    `
export const Line = styled.div`
    display: none;
    position: absolute;
    width: 2px;
    height: 202px;
    background-color: var(--color-3);
    bottom: -100px;
    right: -30px;
    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 2px;
        background: var(--color-3);
    }

    `