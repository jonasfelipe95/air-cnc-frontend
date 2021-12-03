import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "./NewSpotCard.scss";

const NewSpotCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="new-spot-card"
      title="Cadastrar novo Spot"
    >
      <AddIcon fontSize="inherit" />
    </div>
  );
};

export default NewSpotCard;
