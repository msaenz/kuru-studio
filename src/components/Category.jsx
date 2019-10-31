import React from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import ProductsItem from "../components/ProductsItem";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import AsideNav from "../components/AsideNav";
// import itemimage from "../assets/static/events.jpg";
import "./styles/Category.scss";

const Category = ({ categories, offers }) => {
  return (
    <>
      <div className="container__category">
        <AsideNav />
        
        <Categories title="Categorias">
          {categories.map(item => (
            <Card key={item.id} category={item.category} image={item.image} />
          ))}
          {/* <Card key={item.id} category={item.category} image={itemimage} /> */}

        </Categories>
      </div>

      <Offers title="Ofertas Kuru">
        {offers.map(item => (
          <ProductsItem
            idoffer={item.idoffer}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            priceorig={item.priceorig}
            price={item.price}
          />
        ))}
      </Offers>
    </>
  );
};

const mapStateToProps = state => {
  return {
    //elementos que se necesitan del estado
    categories: state.categories,
    offers: state.offers
  };
};
export default connect(
  mapStateToProps,
  null
)(Category);
