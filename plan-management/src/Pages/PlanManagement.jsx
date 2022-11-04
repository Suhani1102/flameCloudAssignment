import React from "react";
import Category from "../Components/Category";
import { Box, Button, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
// import { MdSettings } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

const PlanManagement = () => {
  let planData = [
    {
      id: 1,
      categoryName: "Marketing",
      subCategories: [
        { id: 1, subCategoryName: "Wordpress", pointers: [] },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
    {
      id: 2,
      categoryName: "Design",
      subCategories: [{ id: 1, subCategoryName: "Wordpress", pointers: [] }],
    },
    {
      id: 3,
      categoryName: "Sales",
      subCategories: [{ id: 1, subCategoryName: "Wordpress", pointers: [] }],
    },
  ];
  return (
    <Box p="5%">
      <Box display={"flex"} justifyContent="space-between" marginBottom="28px">
        <Text textAlign={"left"} fontSize="32px" fontWeight={"700"}>
          Action Plans
        </Text>
        <Box>
          <Button colorScheme="messenger" variant="outline" margin={"0 10px"}>
            <Icon as={BsPeople} w="5" h="5" mr={"5px"} /> Manage Access
          </Button>
          <Button colorScheme="messenger">
            <AddIcon fontSize="12px" mr={"5px"} /> New Plan
          </Button>
        </Box>
      </Box>
      <Category key={planData.id} catData={planData} />
    </Box>
  );
};

export default PlanManagement;
