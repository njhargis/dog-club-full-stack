/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLFieldConfig, GraphQLString } from "graphql";
import type { Context } from "../context";
import type { Dog } from "../db";
import db from "../db";
import { DogType } from "../types";

/**
 * @example
 *   query {
 *     user(username: "john") {
 *       id
 *       email
 *     }
 *   }
 */
export const dog: GraphQLFieldConfig<Dog, Context> = {
  description: "Fetches a dog by name.",
  type: DogType,

  args: {
    name: { type: GraphQLString },
  },

  resolve(self, args) {
    const query = db.table<Dog>("dog");

    if (args.name) {
      query.where("name", "=", args.name);
    } else {
      throw new Error("The name argument is required.");
    }

    return query.first();
  },
};
