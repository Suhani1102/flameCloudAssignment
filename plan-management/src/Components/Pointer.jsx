import { Box } from "@chakra-ui/react";
import React from "react";

const Pointer = ({ pointerData }) => {
  return (
    <div>
      {pointerData.map((item) => (
        <Box>{item.pointerName}</Box>
      ))}
    </div>
  );
};

export default Pointer;
