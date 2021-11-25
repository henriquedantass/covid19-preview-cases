import { render } from "@testing-library/react";
import { DrawerMenu } from ".";

test("graphics render", () => {
  const { debug } = render(
    <DrawerMenu onOpen={() => {}} onClose={() => {}} isOpen={true} />
  );
  debug();
});
