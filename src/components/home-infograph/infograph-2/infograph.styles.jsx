import styled from 'styled-components'


export const GraphicContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    
    place-items: center;
    justify-content:start;
    flex-direction:column;
    padding: 0 0px;
    margin:auto;
    margin-top: 10px;    
`

export const CenterCircleContainer =styled.div`
        align-items: center;
        display: flex;
        justify-content: center;
        align-items:center;
        
            
        @media (max-width: 992px) {
            --width-content: 500px;
            
            height: 100%;
            
            position: relative;
        }
        @media (max-width: 700px) {
  
            --width-content: 350px;
            height: 100%;
            flex-direction:column;
            
        }
`

export const Single = styled.div`
    height: 100%;
    width:100%;
    
        @media (max-width: 992px) {
            position: relative;
            margin-bottom: 50px;            
        }
`

export const Full = styled.div`
    height: 100%;
    padding: 0 40px 0 0;
        @media (max-width: 992px) {
            position: relative;
            margin-bottom: 50px;
            width: 100%;
            height: 100%;
            padding: 0; 
        }
        @media (max-width: 700px){
            padding: 0;
        }
`



