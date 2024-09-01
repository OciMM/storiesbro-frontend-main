import React from "react";

import { Box, Typography } from "@mui/material";
import MyCarousel from "../../UI/myCarousel/MyCarousel";
import AuthorizedAdminCarusel from "../../UI/myCarousel/AuthorizedAdminCarusel";
import firstVideo from "./images/storis.svg";
import secondVideo from "./images/mediatmpIMG_6316.jpg";
import thirdVideo from "./images/IMG_6315.mp4";

const Examples = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, fontSize: "32px", textAlign: "center" }}
      >
        Примеры рекламных креативов
      </Typography>
      {/* <MyCarousel /> */}
      <AuthorizedAdminCarusel firstVideo={firstVideo} secondVideo={secondVideo} thirdVideo={thirdVideo}/>
    </Box>
  );
};

export default Examples;
