import React, { useState } from "react";
import Category from "../Components/Category";
import { Box, Button, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import ModalBox from "../Components/ModalBox";
import { v4 as uuidv4 } from "uuid";

const PlanManagement = () => {
  const [showModal, setShowModal] = useState(false);

  const [planData, setPlanData] = useState([
    {
      id: 1,
      categoryName: "Marketing",
      subCategories: [
        {
          id: 1,
          subCategoryName: "Wordpress",
          pointers: [
            { id: 1, pointerName: "Pointer1" },
            { id: 2, pointerName: "Pointer2" },
          ],
        },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
    {
      id: 2,
      categoryName: "Design",
      subCategories: [
        { id: 1, subCategoryName: "Wordpress", pointers: [] },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
    {
      id: 3,
      categoryName: "Sales",
      subCategories: [
        { id: 1, subCategoryName: "Wordpress", pointers: [] },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
  ]);

  const addCategory = (value) => {
    const newPlanData = planData.map((plan) => {
      plan.subCategories.push({
        id: uuidv4(),
        subCategoryName: value,
        pointers: [],
      });
      return plan;
    });
    setPlanData([...newPlanData]);
    setShowModal(false);
  };
  return (
    <Box p="5%">
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        marginBottom="28px"
      >
        <Text textAlign={"left"} fontSize="32px" fontWeight={"700"}>
          Action Plans
        </Text>
        <Box>
          <Button
            colorScheme="messenger"
            variant="outline"
            marginRight={"10px"}
            disabled={true}
          >
            <Icon as={BsPeople} w="5" h="5" mr={"5px"} /> Manage Access
          </Button>
          <Button colorScheme="messenger" onClick={() => setShowModal(true)}>
            <AddIcon fontSize="12px" mr={"5px"} /> New Plan
          </Button>
          <ModalBox
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            handleCreate={addCategory}
            title="Plan Name"
            placeholder={"Name Your Plan"}
          />
        </Box>
      </Box>
      <Category
        key={planData.id}
        catData={planData}
        setPlanData={setPlanData}
      />
    </Box>
  );
};

export default PlanManagement;
