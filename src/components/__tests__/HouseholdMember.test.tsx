import { render, screen } from "@testing-library/react";
import React from "react";
import HouseholdMember from "components/HouseholdMember";
import householdMembers from "mock-data/householdMembers";

test("Should render household member component correctly", () => {
  render(<HouseholdMember member={householdMembers[0]} />);

  expect(screen.getByText("Person 1")).toBeInTheDocument();
  expect(screen.getByText("Household contact")).toBeInTheDocument();
  expect(screen.getByText("apple")).toBeInTheDocument();
});
