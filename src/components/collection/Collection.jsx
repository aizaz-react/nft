import React from "react";
import Card from "../card/Card";
import person from "../../assets/person.svg";
import person1 from "../../assets/person1.svg";
import person3 from "../../assets/person3.svg";
import card1 from "../../assets/card.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";

const list = [
  { profileImage: person, cardImage: card1 },
  { profileImage: person1, cardImage: card2 },
  { profileImage: person3, cardImage: card3 },
  { profileImage: person, cardImage: card4 },
  { profileImage: person1, cardImage: card5 },
  { profileImage: person3, cardImage: card6 },
];

const Collection = () => {
  return (
    <div className="collection">
      <h1>Collections</h1>
      <p>
        With more than 180+ hand drawn traits, each NFT is unique and comes with
        a membership to an exclusive <br />
        group of successful investors. Join an ambitious ever-growing community
        with multiple benefits and utilities.
      </p>
      <div className="card-list">{list.map(Card)}</div>
    </div>
  );
};

export default Collection;
