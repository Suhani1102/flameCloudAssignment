import { Box } from "@chakra-ui/react";
import React from "react";

const Pointer = ({ pointerData }) => {
  return (
    <div>
      {pointerData.map((item) => (
        <Box border={"1px solid #CBD5E1"}>{item.pointerName}</Box>
      ))}
    </div>
  );
};

export default Pointer;
