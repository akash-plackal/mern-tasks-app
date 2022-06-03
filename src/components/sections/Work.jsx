import React from "react";
import Nav from "./Nav";
import ListContainer from "../ListContainer";

const Work = () => {
  const section = "work";

  return (
    <>
      <Nav section={section} />
      <ListContainer section={section} />
    </>
  );
};

export default Work;
