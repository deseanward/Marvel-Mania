import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardWrapper } from "./card.styles";

const Card = ({ item }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <p className="ml-5">{item.name}</p>
        <span className="self-center">
          <img
            className='rounded-md'
            style={{ height: 200, width: 200 }}
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt='thumbnail'
          />
        </span>
        <p>
          <Link  className="ml-5 hover:text-[tan]" to='/'>More Info</Link>
        </p>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
