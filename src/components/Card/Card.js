import React from 'react';
import {CardContainer} from "./Card.styled";


const Card = ({imgUrl,index,title})=> {
    return(
        <CardContainer key={index}>
            <img src={`${imgUrl}`} />
        </CardContainer>
    )
}
export default Card
