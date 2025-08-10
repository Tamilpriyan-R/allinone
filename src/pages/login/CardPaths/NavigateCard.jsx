import React from "react";
import { Card } from "@mui/material";

const NavigateCard = ({ logo, title }) => {
  return (
    <Card
      sx={{
        height: 50,
        width: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 2,
        cursor: "pointer",
        "&:hover": { boxShadow: 4 },
        flexShrink: 0 // keeps width fixed in flex-wrap
      }}
    >
       <img
        src={logo}
        alt={title}
        style={{
          width: "70px",
          height: "30px",
          objectFit: "contain"
        }}
      /> 
    </Card>
  );
};

export default NavigateCard;
