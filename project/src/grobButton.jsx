import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function GrobButton() {
  return (
    <Box
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      className="group-button-nav"
    >
      <Button
        variant="Contained"
        className="button-nav"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <Link to="/Chat-S4A">Chat S4A</Link>
      </Button>
      <Button
        variant="Contained"
        className="button-nav"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <Link to="/one">فرقة ثالثة</Link>
      </Button>
      <Button
        variant="Contained"
        className="button-nav"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <Link to="/one">فرقة ثانية</Link>
      </Button>
      <Button
        variant="Contained"
        className="button-nav"
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <Link to="/one">فرقة اولة</Link>
      </Button>
    </Box>
  );
}
