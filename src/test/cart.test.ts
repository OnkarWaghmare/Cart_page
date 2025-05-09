import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

describe("testing Cart compoenent", () => {
  test("is cart compoenent loaded", () => {
    render(<Cart cartDetails={Mock - data} />);

    const conatiner = screen.getByText("Cart");
    expect(conatiner).to;
  });
});
