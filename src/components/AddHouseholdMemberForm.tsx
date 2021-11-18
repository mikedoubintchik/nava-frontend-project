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
    firstName: "",
    lastName: "",
    description: "",
    favoriteFruit: "",
  });

  const { firstName, lastName, description, favoriteFruit } = householdMember;

  return (
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Member First Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Member First Name"
          value={firstName}
          onChange={(e) =>
            setMemberValue({ ...householdMember, firstName: e.target.value })
          }
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Member Last Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Member Last Name"
          value={lastName}
          onChange={(e) =>
            setMemberValue({ ...householdMember, lastName: e.target.value })
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
      <FloatingLabel
        controlId="floatingInput"
        label="Favorite Fruit"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Favorite Fruit"
          value={favoriteFruit}
          onChange={(e) =>
            setMemberValue({
              ...householdMember,
              favoriteFruit: e.target.value,
            })
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
