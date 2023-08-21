import React, { useEffect, useState } from "react";

import { MarkeeContainer } from "./markee.styles";

const Markee = ({name}) => {
  const [markee, setMarkee] = useState("");

  useEffect(() => {
    try {
      let characterMarkee = name;

      
      setMarkee(characterMarkee);
    } catch (error) {
      console.log(error);
    }
  }, [markee]);

  return (
    <MarkeeContainer>
      <span className='scrolling'>{markee}</span>
      <span className='scrolling'>{markee}</span>
    </MarkeeContainer>
  );
};

export default Markee;
