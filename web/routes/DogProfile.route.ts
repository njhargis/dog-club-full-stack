/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { graphql } from "relay-runtime";
import { type Route } from "../core";
import { type DogProfileQuery } from "../queries/DogProfileQuery.graphql";
import { type DogProfile } from "./DogProfile";

/**
 * User profile (e.g. https://example.com/u/koistya)
 *
 * @see https://github.com/pillarjs/path-to-regexp
 */
export default {
  path: "/dog-profile/:name(\\w+)",
  query: graphql`
    query DogProfileQuery($name: String!) {
      dog(name: $name) {
        id
        name
      }
    }
  `,
  component: () => import(/* webpackChunkName: "dogProfile" */ "./DogProfile"),
  response: (data) =>
    data.dog && {
      title: `${data.dog.name} · React App`,
      props: data,
    },
} as Route<DogProfile, DogProfileQuery>;
