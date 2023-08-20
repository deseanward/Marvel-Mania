import React from "react";
import { DetailsWrapper } from "./details.styles";

const Details = ({ selected }) => {
  return (
    <DetailsWrapper>
      <h1>{selected.name}</h1>
      <section>
        <span className='self-center'>
          <img
            className='rounded-md my-8'
            style={{ height: 200, width: 200 }}
            src={`${selected.thumbnail.path}.${selected.thumbnail.extension}`}
            alt='thumbnail'
          />
        </span>
      </section>

      <section className='max-w-[60vw]'>
        <p>{selected.description}</p>
      </section>
    </DetailsWrapper>
  );
};

export default Details;
