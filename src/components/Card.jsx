import React from "react";
// import {Link} from 'react-router-dom'
import "./styles/Card.scss";

const Card = props => {
  const { id, category, image } = props;
  return (
    <article key={id} className="Card">
      <img src={image} alt={category} />
      <h2>{category}</h2>
    </article>
  );
};

export default Card;
