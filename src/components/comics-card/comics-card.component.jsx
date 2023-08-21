import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardWrapper } from "./comics-card.styles";

const ComicsCard = ({ item }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <span>{item.title}</span>
        <span className='self-center'>
          <img
            className='rounded-md'
            style={{ height: 200, width: 200 }}
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt='thumbnail'
          />
        </span>
        <p>
          <Link
            className='p-2 rounded my-4 bg-[#AC3129] hover:bg-[#A5A4A4] hover:text-[#AC3129] shadow shadow-[gray]'
            to={`${item.id}`}
          >
            More Info
          </Link>
        </p>
      </CardContainer>
    </CardWrapper>
  );
};

export default ComicsCard;
