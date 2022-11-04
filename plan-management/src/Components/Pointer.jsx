import React, { useState } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import ModalBox from "./ModalBox";

const Pointer = ({ pointerData, planData, setPlanData }) => {
  const [pointerModal, setPointerModal] = useState(false);
  const [currentPointer, setCurrentPointer] = useState();
  const deletePointer = () => {
    const deleteIndex = pointerData.findIndex(
      (pointer) => pointer.id == currentPointer.id
    );
    delete pointerData[deleteIndex];
    setPlanData([...planData]);
    setPointerModal(false);
    setCurrentPointer(null);
  };
  return (
    <Box ml="22px">
      {pointerData.map((item) => (
        <Box
          border={"1px solid #CBD5E1"}
          backgroundColor={"#F8FAFC"}
          p="5px"
          borderRadius={"4px"}
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          mb={"8px"}
        >
          <Box display={"flex"}>
            <Image src="/dragIcon.svg" />
            <Box ml="4px">{item.pointerName}</Box>
          </Box>
          <Menu>
            <MenuButton as={Button}>
              <Image src="/threeDot.svg" />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setPointerModal(true);
                  setCurrentPointer(item);
                }}
              >
                Delete
              </MenuItem>
              <ModalBox
                isOpen={pointerModal}
                onClose={() => setPointerModal(false)}
                handleCreate={deletePointer}
                isDelete={true}
                title="Delete Pointer"
              />
            </MenuList>
          </Menu>
        </Box>
      ))}
    </Box>
  );
};

export default Pointer;
