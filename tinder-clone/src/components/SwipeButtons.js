import React from "react";
import "../css/SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon fontSize="large" className="replay" />
      </IconButton>

      <IconButton>
        <CloseIcon fontSize="large" className="close" />
      </IconButton>

      <IconButton>
        <StarIcon fontSize="large" className="star" />
      </IconButton>

      <IconButton>
        <FavoriteIcon fontSize="large" className="fav" />
      </IconButton>

      <IconButton>
        <FlashOnIcon fontSize="large" className="flash" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
