import styled from 'styled-components';
import Book from './book/book';

const Books = ({title,list, wide}) =>{

return(
    <Container>
        <Title>{title}</Title>
        <BookList>
            {
                list.map(item=>(
                    <Book item={item} key={item.key}/>
                    )
                )
            }
        </BookList>      
    </Container>
)

}

export default Books;



const Container = styled.div`
    width: 100%;
    margin:50px;
`;

// const BookList = styled.div`
//     margin: auto;
//     justify-content:center;
//     display:flex;
//     flex-wrap:wrap;
// `;

// const Title = styled.h2`
//     display:block;
// `;

const BookList = styled.div`
    display: grid;
     grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: minmax(auto-fill,auto);

    @media (min-width: 320px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, auto));
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fill, 4fr);
    }
`;

const Title = styled.h2`
    display:block;
`;