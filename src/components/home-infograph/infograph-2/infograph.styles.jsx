import styled from 'styled-components'


export const GraphicContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    
    place-items: center;
    justify-content:start;
    flex-direction:column;
    padding-top: 100px;
    margin: 100px 0 300px;
    
`

export const CenterCircleContainer =styled.div`
        display: grid;
        justify-content: center;
        align-items: center;
        grid-gap: 20px;
        width: 100%;
        padding: 0 20px;
        height:100vh;
        grid-template-columns: 500px 500px;
        grid-template-rows: 500px 250px;
        
            
        @media (max-width: 992px) {

            --width-content: 600px;
            width: 100%;
            height: 100%;
            display: grid;
            gap: 20px;
            grid-template-columns: var(--width-content) ;
            grid-template-rows: var(--width-content) var(--width-content) calc(var(--width-content)/2) calc(var(--width-content)/2) ;
            position: relative;
        }
        @media (max-width: 700px) {

        --width-content: 350px;
        width: 100%;
        height: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: var(--width-content) ;
        grid-template-rows: var(--width-content) var(--width-content) calc(var(--width-content)*2) calc(var(--width-content)*2) ;
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


