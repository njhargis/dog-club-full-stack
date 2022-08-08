/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Knex } from "knex";
import nanoid from "nanoid";

// Short ID generator
// https://zelark.github.io/nano-id-cc/
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const newUserRoleId = nanoid.customAlphabet(alphabet, 6);

/**
 * Assigns all the users the guest role.
 */
export async function seed(db: Knex) {
  console.log("Inserting user roles");

  const defaultRole = await db
    .select(["id"])
    .from("role")
    .where({ name: "Guest" });

  const users = await db.select(["id"]).from("user");

  const records = Array.from(users).map((user) => {
    const id = newUserRoleId();
    const user_id = user.id;
    const role_id = defaultRole[0].id;

    return {
      id,
      user_id,
      role_id,
    };
  }) as any; /* eslint-disable-line @typescript-eslint/no-explicit-any */

  await db.table("user_role").insert(records).onConflict(["id"]).ignore();
}
