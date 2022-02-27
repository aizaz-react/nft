import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import seletedIcon from "../../assets/selected.svg";

const list = ["home", "features", "roadmap", "team"];

const Navbar = () => {
  const [selected, setSelected] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt={logo} />
      <ul>
        {list.map((title, i) => (
          <li key={i}>
            <a
              style={{
                color: title === selected && "#7918F2",
                marginTop: title === selected && "0.5rem",
              }}
              onClick={() => setSelected(title)}
              href={`#${title}`}
            >
              {title}
            </a>
            {title === selected && <img src={seletedIcon} alt={seletedIcon} />}
          </li>
        ))}
        <button>Join Our Discord</button>
      </ul>
    </div>
  );
};

export default Navbar;
