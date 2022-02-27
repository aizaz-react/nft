import React from "react";
import star from "../../assets/star.svg";

const Card = ({ profileImage, cardImage }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-profile">
          <img src={profileImage} alt={profileImage} />
          <p>@knight</p>
        </div>
        <div className="stars">
          <img src={star} alt={star} />
          <p>213</p>
        </div>
      </div>
      <img src={cardImage} alt={cardImage} />
      <div className="card-footer">
        <div>
          <p>Current bid</p>
          <h3>0.54 ETH</h3>
        </div>
        <div style={{ textAlign: "end" }}>
          <p>Ending in</p>
          <h3>12h 55m 2s</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
