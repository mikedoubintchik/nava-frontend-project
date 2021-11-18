import { ReactElement, useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HouseholdMember from "components/HouseholdMember";
import AddHouseholdMemberModal from "modals/AddHouseholdMemberModal";
import { ACTION, HouseholdMemberType, useStore } from "store";
import axios from "axios";
import { BASE_URL, householdMembersEndpoint } from "constants/constants";
import { nanoid } from "nanoid";
import Loader from "react-loader-spinner";

const MarketplacePage = (): ReactElement => {
  const { state, dispatch } = useStore();

  const [showAddMemberForm, setShowAddMemberForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data: members } = await axios.get(
      BASE_URL + householdMembersEndpoint
    );

    dispatch({
      type: ACTION.ADD_INITIAL_HOUSEHOLD_MEMBERS,
      householdMembers: members.members,
    });

    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchData();

    return () => {
      // cleanup if needed
    };
  }, [fetchData]);

  const renderHouseholdMembers = (): ReactElement[] =>
    state?.householdMembers?.map((member: HouseholdMemberType) => (
      <Col className="m-4 p-0" key={nanoid()}>
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

      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
    </Container>
  );
};

export default MarketplacePage;
