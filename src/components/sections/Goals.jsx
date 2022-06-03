import React from "react";
import Nav from "./Nav";
import ListContainer from "../ListContainer";

const Goals = () => {

const section = "goals"

  return (
    <>
      <Nav section={section} />
      <ListContainer section={section} />
    </>
  );
};

export default Goals;
