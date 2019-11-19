import React from "react";
import { connect } from "react-redux";
import "./styles/Categories.scss";
import AsideNav from "../components/AsideNav";
import Products from "../components/Products";
import ProductsItem from "../components/ProductsItem";

const Tienda = ({ products }) => (
  <>
    <div className="container__category">
      tienda virtual
      <AsideNav />
      <Products>
        {products.map(item => (
          <ProductsItem
            idoffer={item.idproduct}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            priceorig={item.priceorig}
            price={item.price}
          />
        ))}
      </Products>
    </div>
  </>
);

const mapStateToProps = state => {
  return {
    //elementos que se necesitan del estado
    products: state.products,
  };
};
export default connect(
  mapStateToProps,
  null
)(Tienda);
