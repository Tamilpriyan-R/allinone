import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const NavigateCard = ({ logo, title }) => {
  return (
    <Card
      sx={{
        height: "30px",
        padding: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 2,
        boxShadow: 2,
        cursor: "pointer",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <img
        src={logo}
        alt={title}
        style={{ width: "50px", height: "30px", objectFit: "contain" }}
      />
      {/* <CardContent sx={{ padding: "0 !important" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
      </CardContent> */}
    </Card>
  );
};

export default NavigateCard;
