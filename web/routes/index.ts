/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import accountSettings from "./AccountSettings.route";
import home from "./Home.route";
import legal from "./Legal.route";
import userProfile from "./UserProfile.route";
import dogProfile from "./DogProfile.route";

/**
 * The list of application routes (pages).
 */
export default [
  home,
  accountSettings,
  ...legal,
  userProfile,
  dogProfile,
] as const;
