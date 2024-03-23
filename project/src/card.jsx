import React from "react";
import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cardd(prop) {
  return (
    <>
      <div className="min-page-card">
        <Card className="card-ad">
          <Typography variant="h5">Title{ prop.name }</Typography>
          <Typography variant="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography variant="p" color="primary" component="h6">
            <Link>#Link1</Link>
          </Typography>
        </Card>
      </div>
    </>
  );
}
