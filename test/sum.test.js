import { calc } from "../utils";

test("test function sum() in utils", () => {
  const result = calc.sum(1, 2, -3);
  expect(result).toBe(6);
});

test("test function sum() with array string arguments", () => {
  const result = calc.sum("1", "2", "3");
  expect(result).toBe("123");
});
