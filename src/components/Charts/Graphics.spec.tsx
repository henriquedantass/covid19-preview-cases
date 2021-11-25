import { render } from "@testing-library/react";
import { Graphics } from ".";

jest.mock("react-apexcharts", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

test("graphics render", () => {
  const { debug } = render(
    <Graphics
      dailyCasesOfCovid={[
        258996667, 259916105, 260707862, 261519054, 262562343,
      ]}
      totalCasesOfCovid={[
        258996667, 259916105, 260707862, 261519054, 262562343,
      ]}
    />
  );
  debug();
});
