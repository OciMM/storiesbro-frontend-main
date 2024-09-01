import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import logo from "./images/logo.svg";
import menu from "./images/menu.svg";
import AdminLeftSideBar from "../../AuthorizedAdmin/adminLeftSideBar/AdminLeftSideBar";
import ExitMenu from "./exitMenu/ExitMenu";
import AuthorizedCustomerLeftSidebar from "../../AuthorizedCustomer/authorizedCustomerLeftSidebar/AuthorizedCustomerLeftSidebar";
import MyButton from "../../UI/buttons/MyButton";

const AuthorizedUserHeader = ({ ismainpage = false, isCustomer }) => {
  const [open, setOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const accountStatus = localStorage.getItem("statusAccount");
  const navigateToHelp = () =>
    navigate(accountStatus === "customer" ? "/customer-help" : "/admin-help");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: { md: "0 130px", xs: "0 16px" },
        height: { xs: "50px", sm: "auto" },
      }}
    >
      {/* Иконка меню для мобильных устройств */}
      <Box
        component="img"
        alt="menu"
        src={menu}
        sx={{
          display: { xs: "block", lg: "none" },
          cursor: "pointer",
          height: { xs: "50px" },
        }}
        onClick={() => setLeftSidebarOpen(true)}
      />
      
      {/* Логотип */}
      <Box
        component="img"
        alt="logo"
        src={logo}
        sx={{
          height: { xs: "50px", sm: "95px" },
          width: { xs: "30px", sm: "60px" },
          cursor: "pointer",
          ml: { xs: "16px", lg: "0" },
        }}
        onClick={navigateToHelp}
      />

      {/* Средняя часть (например, для Switcher) */}
      <Box
        sx={{
          display: ismainpage ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          background: { xs: "#FBECE0", lg: "white" },
          height: { xs: "50px", sm: "auto" },
        }}
      >
        {/* <Switcher ismainpage={ismainpage} /> */}
      </Box>

      {/* Правая часть */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: { md: "15%", xs: "fit-content" },
        }}
      >
        <Box
          sx={{
            width: ismainpage ? "70%" : "14%",
            display: { xs: "none", lg: "block" },
          }}
        >
          <MyButton options={{ background: "#E37E31", color: "white" }}>
            <Link to="/cash" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white" }}>Пополнить</Typography>
            </Link>
          </MyButton>
        </Box>
        <Typography sx={{ display: { xs: "none", lg: "block" } }}>
          0₽
        </Typography>
        <Box
          component="img"
          alt="profile"
          src={logo} // замените это на нужный вам путь к иконке профиля
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer", ml: 2 }}
        />
        <ExitMenu open={open} setOpen={setOpen} />
      </Box>

      {/* Боковые меню */}
      <AdminLeftSideBar
        open={!isCustomer && leftSidebarOpen}
        setOpen={setLeftSidebarOpen}
      />
      <AuthorizedCustomerLeftSidebar
        open={isCustomer && leftSidebarOpen}
        setOpen={setLeftSidebarOpen}
      />
    </Box>
  );
};

export default AuthorizedUserHeader;
