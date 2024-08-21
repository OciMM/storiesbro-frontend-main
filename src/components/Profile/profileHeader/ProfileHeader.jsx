import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../images/icons/commonIcons/logo.svg";
import humanProfile from "../../../images/icons/humanProfile.svg";
import MyButton from "../../UI/buttons/MyButton";
import LeftSideBar from "./sidebars/LeftSideBar";
import RightSideBar from "./sidebars/RightSideBar";

import "./sidebars/sidebarStyles/style.css";

const ProfileHeader = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: { md: "0 130px", xs: "0 16px" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MenuIcon
          sx={{ mr: { md: 5, xs: 2 }, cursor: "pointer" }}
          onClick={() => setLeftSidebarOpen(true)}
        />
        <LeftSideBar open={leftSidebarOpen} setOpen={setLeftSidebarOpen} />

        <Box
          component="img"
          alt="logo"
          src={logo}
          sx={{
            height: { xs: "50px", sm: "95px" },
            width: { xs: "30px", sm: "60px" },
            cursor: "pointer",
          }}
          onClick={() =>
            navigate(
              localStorage.getItem("statusAccount") === "customer"
                ? "/customer-help"
                : "/admin-help"
            )
          }
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: { md: "15%", xs: "fit-content" },
        }}
      >
        <Box sx={{ width: "70%", display: { lg: "block", xs: "none" } }}>
          {/* <MyButton
            options={{ background: "#E68B46", color: "white", mr: 1 }}
          >
            <Link to="/cash" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white" }}>Пополнить</Typography>
            </Link>
          </MyButton> */}
        </Box>
        <Typography sx={{ display: { lg: "block", xs: "none" } }}>0₽</Typography>
        <Box
          component="img"
          alt="profile"
          src={humanProfile}
          onClick={() => setRightSidebarOpen(true)}
          sx={{ cursor: "pointer" }}
        />
        <RightSideBar open={rightSidebarOpen} setOpen={setRightSidebarOpen} />
      </Box>
    </Box>
  );
};

export default ProfileHeader;
