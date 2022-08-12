/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { type DogProfileQuery$data } from "../queries/DogProfileQuery.graphql";

function DogProfile(props: DogProfileQuery$data): JSX.Element {
  const { dog } = props;

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "grid",
        gridGap: 24,
        gridTemplateColumns: "160px auto",
        marginTop: (x) => x.spacing(3),
        marginBottom: (x) => x.spacing(3),
      }}
    >
      {/* User activity, etc. */}

      <div>
        <Card sx={{ marginBottom: (x) => x.spacing(2) }}>
          <CardContent>
            <p />
            dog
          </CardContent>
        </Card>

        <Card sx={{ minHeight: 600 }}>
          <CardContent>...</CardContent>
        </Card>
      </div>
    </Container>
  );
}

export default DogProfile;
export type DogProfile = typeof DogProfile;
