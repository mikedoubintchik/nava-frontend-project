import { FC, ReactElement } from "react";
import { HouseholdMemberType } from "store";
import Card from "react-bootstrap/Card";

interface IHouseholdMember {
  member: HouseholdMemberType;
}

const HouseholdMember: FC<IHouseholdMember> = ({
  member: { firstName, lastName, description, favoriteFruit },
}): ReactElement => (
  <Card body>
    <h3>{`${firstName} ${lastName}`}</h3>
    <p>
      <strong>Description:</strong> {description}
    </p>
    <p>
      <strong>Favorate Fruit:</strong> {favoriteFruit}
    </p>
  </Card>
);

export default HouseholdMember;
