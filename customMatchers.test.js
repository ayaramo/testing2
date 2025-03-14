require("./customMatchers");

describe("Custom Matchers", () => {
  test("should return max of three numbers", () => {
    expect(10).toBeMaxOfThree(5, 10, 7);
  });

  test("should check if number is between two numbers", () => {
    expect(8).toBeBetween(5, 10);
  });

  test("should return the largest of two numbers", () => {
    expect(15).toBeLargest(10, 15);
  });
});
