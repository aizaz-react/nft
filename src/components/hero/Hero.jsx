import React from "react";
import bigmonkey from "../../assets/bigmonkey.svg";
import heroImage from "../../assets/hero-image.svg";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={bigmonkey} alt={bigmonkey} />
      </div>
      <div className="hero-details">
        <div className="hero-heading">
          <h1>EXCLUSIVE</h1>
          <h3>newest NFT release</h3>
          <img src={heroImage} alt={heroImage} className="image1" />
          <img src={heroImage} alt={heroImage} className="image2" />
          <img src={heroImage} alt={heroImage} className="image3" />
        </div>
        <div className="hero-description">
          <p>
            The <span>BILLIONAIRE CLUB</span> is a private collection of 10 000
            billionaire apes NFTs—unique digital collectibles. The apes are
            stored as ERC-721 tokens on the Ethereum blockchain and hosted on
            IPFS.
          </p>
          <p id="color-text">Reveal on October 20th.</p>
        </div>
        <div className="hero-input">
          <input placeholder="your@email.com|" />
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
