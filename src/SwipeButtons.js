import React from "react";
import "./SwipeButtons.css";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

export const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon
          fontSize="large"
          style={{ fill: "#f5b748" }}
          classname="swipeButtons__repeat"
        />
      </IconButton>
      <IconButton>
        <CloseIcon
          fontSize="large"
          style={{ fill: "#ec5e6f" }}
          classname="swipeButtons__left"
        />
      </IconButton>
      <IconButton>
        <StarRateIcon
          fontSize="large"
          style={{ fill: "#62b4f9" }}
          classname="swipeButtons__star"
        />
      </IconButton>
      <IconButton>
        <FavoriteIcon
          fontSize="large"
          style={{ fill: "#76e2b3" }}
          classname="swipeButtons__right"
        />
      </IconButton>
      <IconButton>
        <FlashOnIcon
          fontSize="large"
          style={{ fill: "#915dd1" }}
          classname="swipeButtons__lightning"
        />
      </IconButton>
    </div>
  );
};
