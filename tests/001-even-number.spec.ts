import { expect } from "chai";
import { describe, it } from "bun:test";

import { checkNumber } from "../src/001-even-number.js";
describe("even-number", () => {
  it("Should return even when number is even", () => {
    expect(checkNumber(10)).to.eql("even");
  });

  it("Should return odd when number is odd", () => {
    expect(checkNumber(7)).to.eql("odd");
  });
});
