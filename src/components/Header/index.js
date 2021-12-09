import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import menuIcon from "../../assets/images/menu-icon.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../context/AuthContext";
import BallotIcon from "@mui/icons-material/Ballot";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchor, setAnchor] = useState(null);
  const { setUserId, setUser } = useAuth();

  const navigate = useNavigate();

  const open = Boolean(anchor);

  const logout = () => {
    setUserId(null);
    setUser(null);
    localStorage.clear();
  };

  return (
    <header className="aircnc-header">
      <img className="header-logo" src={logo} alt="Header Logo" />

      <img
        {...{ "aria-expanded": open ? "true" : undefined }}
        onClick={(event) => setAnchor(event.currentTarget)}
        className="header-menu-icon"
        src={menuIcon}
        alt="Menu Icon"
      />

      <Menu
        id="basic-menu"
        anchorEl={anchor}
        open={open}
        onBackdropClick={() => setAnchor(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/reservations");
            setAnchor(null);
          }}
        >
          <ListItemIcon>
            <BallotIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Minhas Reservas</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            logout();
            setAnchor(null);
          }}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
