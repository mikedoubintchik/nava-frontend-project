import { FC, ReactElement } from "react";
import { HouseholdMemberType } from "store";
import Card from "react-bootstrap/Card";

interface IHouseholdMember {
  member: HouseholdMemberType;
}

const HouseholdMember: FC<IHouseholdMember> = ({
  member: { name, description, fruit },
}): ReactElement => (
  <Card body>
    <h3>{name}</h3>
    <p>
      <strong>Description:</strong> {description}
    </p>
    <p>
      <strong>Favorate Fruit:</strong> {fruit}
    </p>
  </Card>
);

export default HouseholdMember;
