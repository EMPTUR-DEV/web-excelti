import styled from 'styled-components'

export const BoardInfoContainer = styled.div`
    z-index:15;
    position: fixed;
    width: 100%;
    height:100vw;
    z-index: 10000;
    display:flex;
    justify-content: center;
    top:0;
    left: ${({active})=> active? '0%' :  '-100%'};
    transition:  ease-in-out 0.3s;
`
export const InfoBox = styled.div`

    z-index:12;
    width: 80%;
    height:420px;
    max-height: 70vh;
    box-shadow: 0 0 3px 1px #888;
    margin: 120px 0 0 0;
    border-radius: 10px;
    border:1px gray;
    background-color: white;
    position: relative;
    z-index:10500;
`
export const BoardBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    opacity: 0.3;
    position: absolute;

    /* background-color: ${({active})=> active? 'rgba(50,50,50,0.5)' :  'rgba(50,50,50,0)'}; */
`
