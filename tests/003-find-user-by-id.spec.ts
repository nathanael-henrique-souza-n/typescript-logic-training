import { expect } from "chai";
import { describe, it } from "bun:test";

import { findUserById } from "../src/003-find-user-by-id.js";
import { users } from "../src/003-find-user-by-id.js";

describe("findUserById", () => {
  it("Should return a user by id successfully", () => {
    expect(findUserById(users, 1)).to.deep.equal({
      id: 1,
      name: "Nathanael",
      active: true,
    });
  });
});
