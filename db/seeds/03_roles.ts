/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { type Knex } from "knex";
import nanoid from "nanoid";

// Short ID generator
// https://zelark.github.io/nano-id-cc/
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const newRoleId = nanoid.customAlphabet(alphabet, 6);

/**
 * Seeds the database with roles.
 */
export async function seed(db: Knex) {
  console.log("Inserting roles");

  const records = Array.from(["Guest", "Member", "Administrator"]).map(
    (arrayElement) => {
      const id = newRoleId();
      const name = arrayElement;

      return {
        id,
        name,
      };
    },
  ) as any; /* eslint-disable-line @typescript-eslint/no-explicit-any */

  await db.table("role").insert(records).onConflict(["id"]).ignore();
}
