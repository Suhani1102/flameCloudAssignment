import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Pointer from "./Pointer";
import ModalBox from "./ModalBox";
import { v4 as uuidv4 } from "uuid";

const SubCategory = ({ subCatData, planData, setPlanData }) => {
  const [currentSubCat, setCurrentSubCat] = useState();
  const [pointerModal, setPointerModal] = useState(false);
  uuidv4();
  const addPointer = (value) => {
    // console.log(currentSubCat);
    currentSubCat.pointers.push({ id: uuidv4(), pointerName: value });
    setPlanData([...planData]);
    setPointerModal(false);
    setCurrentSubCat(null);
  };
  return (
    <Box>
      <Accordion allowMultiple>
        {subCatData.map((subCat) => (
          <AccordionItem key={subCat.id} backgroundColor="#FFFFFF">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box
                      flex="1"
                      textAlign="left"
                      marginLeft={"15px"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Image src="/dragIcon.svg" />
                      <Box ml="4px"> {subCat.subCategoryName}</Box>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Pointer
                    key={subCat.id}
                    pointerData={subCat.pointers}
                    planData={planData}
                    setPlanData={setPlanData}
                  />
                  <Button
                    colorScheme="messenger"
                    variant="outline"
                    margin={"0 10px"}
                    onClick={() => {
                      setCurrentSubCat(subCat);
                      setPointerModal(true);
                    }}
                  >
                    <AddIcon fontSize="12px" mr={"5px"} />
                    Add Pointer
                  </Button>
                  <ModalBox
                    isOpen={pointerModal}
                    onClose={() => setPointerModal(false)}
                    handleCreate={addPointer}
                    title="Pointer Name"
                    placeholder={"Name Pointer"}
                  />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default SubCategory;
