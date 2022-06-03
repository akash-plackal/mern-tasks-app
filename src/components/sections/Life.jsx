import React from "react";
import ListContainer from "../ListContainer";
import Nav from "./Nav";

const Life = () => {
  const section = "life";
  return (
    <>
      <Nav section="life" />
      <ListContainer section={section} />
    </>
  );
};

export default Life;
