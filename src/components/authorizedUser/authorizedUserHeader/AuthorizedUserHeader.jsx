import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "./images/logo.svg";

import menu from "./images/menu.svg";
import Switcher from "../../../components/UI/switcher/Switcher";
import MyButton from "../../../components/UI/buttons/MyButton";
import AdminLeftSideBar from "../../AuthorizedAdmin/adminLeftSideBar/AdminLeftSideBar";
import ExitMenu from "./exitMenu/ExitMenu";
import AuthorizedCustomerLeftSidebar from "../../AuthorizedCustomer/authorizedCustomerLeftSidebar/AuthorizedCustomerLeftSidebar";

const AuthorizedUserHeader = ({ ismainpage = false, isCustomer }) => {
  const [open, setOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <Grid container sx={{ alignItems: "center" }}>
      {localStorage.getItem('statusAccount') == 'customer' && 
        <Grid
          component="img"
          alt="logo"
          src={logo}
          order={{ lg: 2, xs: 3 }}
          item
          lg={2}
          xs={8}
          sx={{
            height: { xs: "50px", sm: "95px" },
            width: { xs: "30px", sm: "60px" },
            cursor: "pointer"
          }}
          onClick={() => navigate("/customer-help")}
        />
      }
      {localStorage.getItem('statusAccount') == 'admin' && 
        <Grid
          component="img"
          alt="logo"
          src={logo}
          order={{ lg: 2, xs: 3 }}
          item
          lg={2}
          xs={8}
          sx={{
            height: { xs: "50px", sm: "95px" },
            width: { xs: "30px", sm: "60px" },
            cursor: "pointer"
          }}
          onClick={() => navigate("/admin-help")}
        />
      }
      <AdminLeftSideBar
        open={!isCustomer && leftSidebarOpen}
        setOpen={setLeftSidebarOpen}
      />
      <AuthorizedCustomerLeftSidebar
        open={isCustomer && leftSidebarOpen}
        setOpen={setLeftSidebarOpen}
      />
      <Grid
        item
        xs={2}
        sx={{
          height: { xs: "20px" },
          display: {
            xs: "block",
            lg: "none",
          },
          cursor: "pointer",
        }}
        component="img"
        alt="menu"
        src={menu}
        order={{ xs: 2 }}
        onClick={() => setLeftSidebarOpen(true)}
      />

      <Grid
        item
        lg={8}
        xs={12}
        order={{ lg: 2, xs: 1 }}
        sx={{
          background: {
            xs: "#FBECE0",
            lg: "white",
          },
          height: { xs: "50px", sm: "auto" },
          display: ismainpage ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Switcher ismainpage={ismainpage} />
      </Grid>

      <Grid
        item
        lg={ismainpage ? 2 : 10}
        xs={2}
        order={{ lg: 3, xs: 4 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "relative",
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
        <ExitMenu open={open} setOpen={setOpen} />
      </Grid>
    </Grid>
  );
};

export default AuthorizedUserHeader;
