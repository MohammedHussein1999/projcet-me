import React from "react";
import Cardd from "./card";
import { Box } from "@mui/material";

export default function TeamCard() {
  return (
    <Box className="team-card">
      <Cardd />
      <Cardd />
      <Cardd />
      <Cardd />
    </Box>
  );
}
