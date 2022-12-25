import React from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton className="header__icon">
        <PersonIcon fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://imgs.search.brave.com/WQHvJXkN_GqWZtRLxQalv3nZCp_G7T6tRifH4XC_VrM/rs:fit:500:281:1/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE1Mjc1LnBuZw"
        alt=""
      />

      <IconButton className="header__icon">
        <ForumIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
