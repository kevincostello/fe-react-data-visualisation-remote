// ./src/utils/format-to-chart.test.js
import { countEvents } from "./utils";

describe("format to chart data", () => {
  it("returns an empty object when passed an empty object", () => {
    const input = [];
    const actualResult = countEvents(input);
    const expectedResult = {};
    expect(actualResult).toEqual(expectedResult);
  });

  it("returns an object structured as required for bar chart with only one label and dataset value when passed one event", () => {
    const input = [
      { name: "generic band", dates: { start: { localDate: "2020-04-26" } } },
    ];
    const actualResult = countEvents(input);
    const expectedResult = {
      labels: ["generic band"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [1],
        },
      ],
    };
    expect(actualResult).toEqual(expectedResult);
  });

  // ... more tests!
});
