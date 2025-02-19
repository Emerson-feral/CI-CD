const sum = require("../index");
const { test } = require("node:test");
const assert = require("node:assert");

test("Should return the expected sum", () => {
  const num1 = 1;
  const num2 = 2;

  const result = sum(num1, num2);
  assert.strictEqual(num1 + 5, result);
});
