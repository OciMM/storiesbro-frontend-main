import React from "react";

import "../../../styles/border.css";
import "../../../styles/colors.css";
import { Box, Typography } from "@mui/material";

const Quotation = ({ quote, person, image }) => {
  return (
    <Box
      className="orangeBorder"
      sx={{
        display: "flex",
        alignItems: "center",
        p: "0 40px 0",
        mt: 5,
        position: "relative",
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: { sx: "14px", sm: "24px" }, fontWeight: 400 }}
        >
          {quote}
        </Typography>
        <Typography
          sx={{ fontSize: { sx: "14px", sm: "24px" }, fontWeight: 400 }}
          className="orange"
        >
          {person}
        </Typography>
      </Box>

      <Box
        component="img"
        src={image}
        alt="Buffet"
        sx={{ width: "50%", mt: 5 }}
      />
    </Box>
  );
};

export default Quotation;
