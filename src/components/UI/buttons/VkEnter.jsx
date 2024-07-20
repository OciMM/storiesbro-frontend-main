import React, { useContext } from "react";
import { Box, Button } from "@mui/material";

import { Context } from "../../../context/Context";
import vk from "../../../images/icons/commonIcons/vk.svg";

const VkEnter = ({ children }) => {
  const [isCustomer, _] = useContext(Context);
  return (
    <Button
      sx={{
        fontWeight: 600,
        fontSize: { xs: "16px", md: "26px" },
        color: "black",
        border: `2px solid ${isCustomer ? "white" : "#2A5885"}`,
        borderRadius: "90px",
        padding: "5px 70px",
        background: isCustomer && "white",
        ":hover": {
          background: isCustomer && "white",
          filter: "brightness(70%)",
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {children}
      <Box component="img" alt="vk" src={vk} sx={{ width: "20%" }} />
    </Button>
  );
};

export default VkEnter;
