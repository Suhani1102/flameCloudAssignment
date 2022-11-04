import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
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
          <AccordionItem key={subCat.id}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box flex="1" textAlign="left" marginLeft={"15px"}>
                      {subCat.subCategoryName}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Pointer key={subCat.id} pointerData={subCat.pointers} />
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
                    subCat={subCat}
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
