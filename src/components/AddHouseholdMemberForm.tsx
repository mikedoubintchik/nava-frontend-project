import React, { FC, ReactElement, useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { ACTION, HouseholdMemberType, useStore } from "../store";

interface IAddHouseholdMemberForm {
  saveHandler: () => void;
}

const AddHouseholdMemberForm: FC<IAddHouseholdMemberForm> = ({
  saveHandler,
}): ReactElement => {
  const { dispatch } = useStore();

  const [householdMember, setMemberValue] = useState<HouseholdMemberType>({
    name: "",
    description: "",
    fruit: "",
  });

  const { name, description, fruit } = householdMember;

  return (
    <Form>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Member Name"
          value={name}
          onChange={(e) =>
            setMemberValue({ ...householdMember, name: e.target.value })
          }
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setMemberValue({ ...householdMember, description: e.target.value })
          }
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Fruit" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Favorite Fruit"
          value={fruit}
          onChange={(e) =>
            setMemberValue({ ...householdMember, fruit: e.target.value })
          }
        />
      </FloatingLabel>

      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          dispatch({
            type: ACTION.ADD_HOUSEHOLD_MEMBER,
            householdMember,
          });

          saveHandler();
        }}
      >
        Add Household Member
      </Button>
    </Form>
  );
};

export default AddHouseholdMemberForm;
