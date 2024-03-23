import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import { Dehaze } from "@mui/icons-material";
import GrobButton from "./grobButton";

export default function Nav() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      
      <AppBar className="nav-bar">
        <Container maxWidth="lg">
          <Toolbar className="min-bar">
            <div className="drab-screen-nav">
              <Dehaze />
              <GrobButton />
            </div>
            <Typography variant="h6" className="logo-bar">
              <Link to="/home">LOGO</Link>
            </Typography>
            <div className="buttons-nav">
              <GrobButton />
            </div>
            <Tooltip>
              <Box>
                <IconButton
                  aria-label="account of current user"
                  onClick={handleOpenUserMenu}
                >
                  <Avatar
                    alt="Avatar"
                    src="https://mui.com//static/images/avatar/1.jpg"
                  />
                </IconButton>
                <Menu
                  className="menu-setting-avatar"
                  sx={{ mt: "45px" }}
                  // id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    className="menu-settings"
                    onClick={handleCloseUserMenu}
                  >
                    <Typography variant="center">الملف الشخصي</Typography>
                  </MenuItem>
                  <MenuItem
                    className="menu-settings"
                    onClick={handleCloseUserMenu}
                  >
                    <Typography variant="center">تسجيل الخروج</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
