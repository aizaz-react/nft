import React from "react";
import cursor from "../../assets/cursor.svg";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Aped with Us!</h1>
      <div className="signup">
        <div>
          <p>Sign up for our newsletter</p>
          <hr />
        </div>
        <img src={cursor} alt={cursor} />
      </div>
    </div>
  );
};

export default Newsletter;
