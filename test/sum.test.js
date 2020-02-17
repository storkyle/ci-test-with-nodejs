import { calc } from "../utils";

test("test function sum() in utils", () => {
  const result = calc.sum(1, 2, 3);
  expect(result).toBe("0");
});
