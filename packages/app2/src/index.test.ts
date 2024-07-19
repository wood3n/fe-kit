import { expect, test } from "vitest";

import { minus } from "./index";

test("adds 2 - 1 to equal 1", () => {
  expect(minus(2, 1)).toBe(1);
});
