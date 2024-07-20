import React from "react";
import { Box, Typography } from "@mui/material";

import Scrooge from "../../../images/landingImages/Scrooge.svg";
import GradientButton from "../../UI/buttons/GradientButton";

const Steps = ({ title, steps, buttonText, setIsLoginFormOpen }) => {
  return (
    <Box
      className="orangeBorder"
      sx={{
        width: "100%",
        pl: 5,
        pb: 3,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <Typography
          sx={{ fontSize: { md: "32px", xs: "16px" }, fontWeight: 600, mt: 8 }}
        >
          {title}
        </Typography>
        <Box sx={{ mb: 5 }}>
          {steps.map((step, index) => (
            <Typography
              key={index}
              sx={{ fontSize: { md: "24px", xs: "14px" }, fontWeight: 400 }}
            >
              {index + 1}. {step}
            </Typography>
          ))}
        </Box>
      </Box>
      <GradientButton width="390px" xsWidth="247px" height="72px" handleClick={() => setIsLoginFormOpen(true)}>
        {buttonText}
      </GradientButton>
      <Box
        component="img"
        alt="scroodge"
        src={Scrooge}
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: "110%",
          width: "50%",
          transition: ".3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );
};

export default Steps;
