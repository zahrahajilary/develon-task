import React from "react";
import { CardContainer } from "./Card.styled";

const Card = ({ imgUrl, index }) => {
  return (
    <CardContainer key={index}>
      <img src={`${imgUrl}`} alt="cat-picture" />
    </CardContainer>
  );
};
export default Card;
