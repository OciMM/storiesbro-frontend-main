import React from "react";

import { Box, Typography } from "@mui/material";
import MyCarousel from "../../UI/myCarousel/MyCarousel";

const Examples = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, fontSize: "32px", textAlign: "center" }}
      >
        Примеры рекламных креативов
      </Typography>
      <MyCarousel />
    </Box>
  );
};

export default Examples;
