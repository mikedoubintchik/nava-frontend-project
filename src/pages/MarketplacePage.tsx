import { ReactElement, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HouseholdMember from "../components/HouseholdMember";
import AddHouseholdMemberModal from "../modals/AddHouseholdMemberModal";
import { HouseholdMemberType, useStore } from "../store";

const MarketplacePage = (): ReactElement => {
  const { state } = useStore();

  const [showAddMemberForm, setShowAddMemberForm] = useState<boolean>(false);

  const renderHouseholdMembers = (): ReactElement[] =>
    state?.householdMembers?.map((member: HouseholdMemberType) => (
      <Col className="m-4 p-0">
        <HouseholdMember member={member} />
      </Col>
    )) || [];

  return (
    <Container className="p-4">
      <h2 className="font-weight-bold">Your household</h2>
      <p>Welcome to The Marketplace! Review your household below:</p>
      <Container fluid>
        <Row>{renderHouseholdMembers()}</Row>
      </Container>
      <Button variant="primary" onClick={() => setShowAddMemberForm(true)}>
        Add new member
      </Button>

      {showAddMemberForm && (
        <AddHouseholdMemberModal
          showModal={showAddMemberForm}
          toggleModal={setShowAddMemberForm}
        />
      )}
    </Container>
  );
};

export default MarketplacePage;
