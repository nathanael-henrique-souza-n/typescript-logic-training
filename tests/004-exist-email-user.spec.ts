import { expect } from "chai";
import { describe, it } from "bun:test";

import { users } from "../src/004-exist-email-user.js";
import { findByEmail } from "../src/004-exist-email-user.js";

describe("findByEmail", () => {
  it("Should return a user by email successfully", () => {
    expect(findByEmail(users, "nathanael@gmail.com")).to.eql(true);
  });
});
