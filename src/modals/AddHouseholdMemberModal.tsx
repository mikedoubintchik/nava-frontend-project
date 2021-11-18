import React, { Dispatch, FC, ReactElement, SetStateAction } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddHouseholdMemberForm from "../components/AddHouseholdMemberForm";

interface IAddHouseholdMemberModal {
  showModal: boolean;
  toggleModal: Dispatch<SetStateAction<boolean>>;
  modalHandler?: () => void;
}

const AddHouseholdMemberModal: FC<IAddHouseholdMemberModal> = ({
  showModal,
  toggleModal,
  modalHandler,
}): ReactElement => (
  <Modal show={showModal} onHide={() => toggleModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Add New Household Member</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <AddHouseholdMemberForm
        saveHandler={() => {
          toggleModal(false);
          if (modalHandler) modalHandler();
        }}
      />
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={() => toggleModal(false)}>
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AddHouseholdMemberModal;
