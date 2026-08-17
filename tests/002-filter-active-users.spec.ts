import { expect } from "chai";
import { describe, it } from "bun:test";

import { userFilterActive } from "../src/002-filter-active-users.js";

describe("userActive", () => {
  it("Should return users active", () => {
    for (const user of userFilterActive()) {
      expect(user.active).to.eql(true);
    }
  });
});
