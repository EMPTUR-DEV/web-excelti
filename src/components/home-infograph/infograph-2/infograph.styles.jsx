import styled from 'styled-components'


export const GraphicContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    
    place-items: center;
    justify-content:start;
    flex-direction:column;
    
    margin: 10px 0 100px;
    
`

export const CenterCircleContainer =styled.div`
        --width-content: 400px;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-gap: 20px;
        width: 100%;
        padding: 0 20px;
        
        grid-template-columns: var(--width-content) var(--width-content);
        grid-template-rows: var(--width-content)  var(--width-content);
        
            
        @media (max-width: 992px) {

            --width-content: 400px;
            width: 100%;
            height: 100%;
            display: grid;
            gap: 20px;
            grid-template-columns: var(--width-content) ;
            grid-template-rows:  var(--width-content) var(--width-content) var(--width-content)var(--width-content); 
            position: relative;
        }
        @media (max-width: 700px) {

        --width-content: 350px;
        width: 100%;
        height: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: var(--width-content) ;
        grid-template-rows: var(--width-content) var(--width-content) var(--width-content) var(--width-content) ;
        position: relative;
        }
`

export const Single = styled.div`
    height: 100%;
    gap: 20px;
    
        @media (max-width: 992px) {
            position: relative;
            margin-bottom: 50px;
            width: 100%;
            height: 100%;
            
        }
`

export const Double = styled.div`
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        

        @media (max-width: 992px) {
            position: relative;
            row-gap:50px;
            column-gap:0;
            margin-bottom: 50px;
            flex-direction: row;
            width: 100%;
            height: 100%;
            
        }
        @media (max-width: 700px) {
            
            flex-direction: column;
        }

`


