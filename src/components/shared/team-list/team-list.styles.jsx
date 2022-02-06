import styled from "styled-components";

export const TeamContainer = styled.div`
    width: 100%;
    margin: 10px 0 30px;
    & span{
        color:blue;
        background-color: white;
        transition: all 0.2s ease-in;
        cursor: pointer;
        &:hover{
            color: var(--greenLeaf);
            text-decoration: underline;
        }
    }
`

export const List = styled.ul`
    width: 400px;
    margin: auto;
    list-style: none;
    & li{
        font-size: 13px;
        background-color: var(--greenLeaf);
        padding: 5px;
        margin:10px 0;
        border-radius: 5px;
        box-shadow: 0px 0px 0px 1px grey;
    }
    @media screen and (max-width: 400px){
        width:280px;
    }
`