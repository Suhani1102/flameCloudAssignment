import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

function ModalBox({ isOpen, onClose, handleCreate, subCat }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pointer Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor. Sit amet, consectetur adipiscing consectetur adipiscing
            elit.
            <Input
              mt={"5px"}
              value={value}
              onChange={handleChange}
              placeholder="Name Pointer"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              colorScheme="messenger"
              onClick={() => {
                handleCreate(value);
                setValue("");
              }}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalBox;
