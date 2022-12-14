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

function ModalBox({
  isOpen,
  onClose,
  handleCreate,
  isDelete,
  title,
  placeholder,
}) {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={"8px"}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor. Sit amet, consectetur adipiscing consectetur adipiscing
            elit.
            {!isDelete && (
              <Input
                mt={"5px"}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
              />
            )}
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
                isDelete ? handleCreate() : handleCreate(value);
                setValue("");
              }}
            >
              {isDelete ? "Delete" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalBox;
