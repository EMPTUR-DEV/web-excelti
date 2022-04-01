import styled from "styled-components";


export const SpanInfoCourse = styled.div `
min-width: 350px;
height: 200px;
display: flex;
flex-direction: column;
margin:  auto;

justify-content: flex-start;
text-align: center;
align-items: center;
box-shadow: 0 0 20px #ddd;

& strong {
    display: flex;
    height: 120px;
    width: 100%;
    flex-direction: column;
    padding: 10px ;
    text-align: center;     
}


& p{
    width: 300px;
    text-align: left;

    font-size: 13px;
        
}
`