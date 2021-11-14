import AddHouseholdMemberForm from "components/AddHouseholdMemberForm";
import { fireEvent, render, screen } from "helpers/test-utils";

describe("AddHouseholdMemberForm", () => {
  it("Should call the save handler when Add Household Member button is clicked", () => {
    const saveHandler = jest.fn();

    render(<AddHouseholdMemberForm saveHandler={saveHandler} />);

    fireEvent.click(screen.getByText("Add Household Member"));

    expect(saveHandler).toHaveBeenCalled();
  });
});
