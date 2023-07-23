import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

 

  return (
<div className="header">
<div className="container">
<h1>
          Food<span className="primary">OpenV2</span>
</h1>
<ul className={isOpen ? "nav-menu active" : "nav-menu"}>
<li>
<a href="/">Home</a>
</li>
<li>
<a href="/">Food</a>
</li>
<li>
<a href="/">About us</a>
</li>
</ul>
<div className="hamburger" onClick={handleClick}>
          {isOpen ? (
<FaTimes size={20} style={{ color: "#333" }} />
          ) : (
<FaBars size={20} style={{ color: "#333" }} />
          )}
</div>
</div>
</div>
  );
};

 

export default Navbar;