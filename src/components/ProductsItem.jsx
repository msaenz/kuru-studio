import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProductsItem.scss";

const ProductsItem = props => {
  const { idoffer, title, subtitle, image, priceorig, price } = props;
  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Products-item-info">
        <h2>
          {title}
          <span>{price}</span>
        </h2>
        <p>{subtitle}</p>
      </div>
      <button type="button" onClick="Comprar">
        Comprar
      </button>
    </div>
  );
};

export default ProductsItem;
