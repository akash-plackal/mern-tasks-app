import React from "react";
import Nav from "./Nav";
import ListContainer from "../ListContainer";

const Personal = () => {

const section = "personal"

  return (
    <>
      <Nav section={section} />
      <ListContainer section={section} />
    </>
  );
};

export default Personal;
