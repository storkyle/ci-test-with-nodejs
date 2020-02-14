import { calc } from "../utils";

test("test function sum() in utils", () => {
  const result = calc.sum(1, 2, -3);
  expect(result).toBe(0);
});

test("test function sum() with array string arguments", () => {
  const result = calc.sum("1", "2", "3");
<<<<<<< HEAD
  expect(result).toBe("12d");
=======
  expect(result).toBe("12");
>>>>>>> ba5c92e889eeba8db2f87d71e0a7362897cf4a0e
});
