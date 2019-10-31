import React from "react";
import "./styles/Offers.scss";

const Offers = ({ children, title }) => (
  <div>
      <h1>{title}</h1>
      <div className="offers">
        {children}
      </div>
  </div>
  
);

export default Offers;
