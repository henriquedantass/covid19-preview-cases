import { render } from "@testing-library/react";
import { Particles } from ".";

test("particles render", () => {
  const { debug } = render(<Particles />);
  debug();
});
