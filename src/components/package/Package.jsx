import React from "react";
import packages from "../../assets/package.svg";
const Package = () => {
  return (
    <div className="package">
      <div className="package-details">
        <h1>The Golden Guests</h1>
        <p>
          The Golden Guests edition by the Billionaire Club are the rarest NFTs.
          <br />
          They are all hand drawn and have no element in common with the <br />
          regular collection.
        </p>
        <button>Join us to register for the Presale</button>
      </div>
      <img src={packages} alt={packages} />
    </div>
  );
};

export default Package;
