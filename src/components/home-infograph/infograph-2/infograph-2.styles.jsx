import styled from 'styled-components'


export const GraphicContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: grid;
    place-items: center;
    
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
            row-gap:50px;
            column-gap:0;
            position: relative;
            margin-bottom: 50px;
            width: 100%;
            height: 100%;
            display: block;
        }
`

export const Double = styled.div`
        display: flex;
        flex-direction: column;
        
        gap: 20px;
        
        &:nth-child(even) {
            flex-direction: column-reverse;
        }
        @media (max-width: 992px) {
            position: relative;
            row-gap:50px;
            column-gap:0;
            margin-bottom: 50px;
            flex-direction: column;
            width: 100%;
            height: 100%;
            &:nth-child(even) {
                flex-direction: column;
            }
        }
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