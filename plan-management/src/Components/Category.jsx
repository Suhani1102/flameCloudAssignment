import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import SubCategory from "./SubCategory";

const Category = ({ catData }) => {
  console.log(catData);
  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        {catData.map((item) => {
          return (
            <AccordionItem key={item.id}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.categoryName}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SubCategory key={item.id} subCatData={item.subCategories} />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Category;
