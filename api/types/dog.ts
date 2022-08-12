/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context } from "../context";
import type { Dog } from "../db";
import { countField } from "./fields";
import { nodeInterface } from "./node";

export const DogType = new GraphQLObjectType<Dog, Context>({
  name: "Dog",
  description: "The registered dog.",
  interfaces: [nodeInterface],

  fields: {
    id: globalIdField(),

    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    },

    name: {
      type: new GraphQLNonNull(GraphQLString),
    },

    breed: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

const connection = connectionDefinitions({
  name: "Dog",
  nodeType: DogType,
  connectionFields: { totalCount: countField },
});

export const DogConnection = connection.connectionType;
export const DogEdge = connection.edgeType;
