import Header from "components/Header";
import { render, screen } from "helpers/test-utils";

it("Should render header with correct title", () => {
  render(<Header title="Meow" />);

  expect(screen.getByText("Meow")).toBeInTheDocument();
});
