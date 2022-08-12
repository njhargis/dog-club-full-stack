/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import faker from "@faker-js/faker";
import { type Knex } from "knex";
import nanoid from "nanoid";

// Short ID generator
// https://zelark.github.io/nano-id-cc/
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const newDogId = nanoid.customAlphabet(alphabet, 6);
const { name } = faker;

/**
 * Assigns all the users a dog.
 */
export async function seed(db: Knex) {
  console.log("Inserting dogs");

  const users = await db.select(["id"]).from("user");

  const records = Array.from(users).map((user) => {
    const id = newDogId();
    const user_id = user.id;
    const breed = "German Shepherd";
    const dogName = name.firstName();

    return {
      id,
      user_id,
      breed,
      dogName,
    };
  }) as any; /* eslint-disable-line @typescript-eslint/no-explicit-any */

  await db.table("dog").insert(records).onConflict(["id"]).ignore();
}
