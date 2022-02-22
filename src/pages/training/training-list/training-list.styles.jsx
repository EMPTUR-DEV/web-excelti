import styled from "styled-components";

export const TrainingListContainer = styled.ul `
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;
    & li{
        width: 250px;
        padding: 10px;
        margin:0 5px;

        display: flex;

        background-color: var(--blue) ;
        border-radius: 5px;
        box-shadow: 0px 0px 0 1px grey;
        color: white;
        transition:  all 0.1s ease-out;
        cursor: pointer;
        
        &:hover{
            background-color: var(--greenLeaf) ;
            box-shadow: 0px 0px 2px 1px grey;
        }
        &:active{
            background-color: var(--greenLeaf) ;
            box-shadow: 0px 0px 0px 2px grey;

        }
        & span{
            margin: auto;
        }
        @media screen and (max-width: 500px){
            
            margin:10px auto;
            height:100%;
            width:90%;
        }
    }

    @media screen and (max-width: 500px){
        flex-direction:column;
    }
}
`