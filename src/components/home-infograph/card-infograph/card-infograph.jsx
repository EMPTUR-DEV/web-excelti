import React from 'react'
import {CardContainer,CardImg,CardNumber,CardText,CardTitle} from './card-infograph.styles'


const CardInfograph = ({title}) => {
    return (
    <CardContainer  bgcolor = '#124e4e' boxshadowcolor = '124e4e'>
        <CardNumber bgcolor = 'white' boxshadowcolor = '#124e4e'>
            {title}
            </CardNumber>
        <CardTitle>Title</CardTitle>
        <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
            temporibus consectetur? Iure id nam fuga asperiores repellat accusantium exercitationem nemo?</CardText>
        <CardImg><img class="flexcardimgItem"
                src="https://cdn.pixabay.com/photo/2017/01/10/23/01/seo-1970475_960_720.png" alt=""/></CardImg>
    </CardContainer>
    )
}

export default CardInfograph
