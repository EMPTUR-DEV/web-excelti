import styled from "styled-components"


export const FormationDescriptionContainer = styled.div `
    
    min-height: var(--ul-height) ;
    width:100%;
    padding: 20px 10px;


    background-color:#eee;
    border-radius:0;
    
    
    
    & strong {
            display: flex;
            
            width: 30%;
            
            padding: 10px ;
            text-align: center;
    

        & h4{
            display: flex;
            margin: auto;
            text-align: center;
            max-height: 70px;
            
    
            border-radius: 5px;
            border-bottom: solid 2px var(--green);
            &:hover{
                background-color: var(--green); 
            }
            transition: all ease-in 0.1s ;
        }
    }


    & span{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 20px auto;
        
        justify-content: space-around;
        text-align: center;
        align-items: center;
        

        
    }

    & li{
        list-style: none;
    }

    & p, ul{
        width: 300px;
        text-align: left;
        padding: 10px;
        font-size: 14px;

        border: 2px solid var(--greenLeaf);
    }
    transition: all ease-in 0.4s ;
`