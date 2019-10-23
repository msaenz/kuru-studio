import React from "react";
import { connect } from "react-redux";
import "../index.css";
import "../components/styles/Home.scss";
import News from "../components/News";
import NewsItem from "../components/NewsItem";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import Card from "../components/Card";
import ProductsItem from "../components/ProductsItem";


const Home = ({ news, categories, offers, products }) => {
  return (
    <>
      <div className="container">
        <News title="Noticias Kuru Studio">
          {news.map(item => (
            <NewsItem
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              cover={item.cover}
              type={item.type}
            />
          ))}
        </News>

        <Categories title="Categorias">
          {categories.map(item => (
            <Card key={item.id} category={item.category} image={item.image} />
          ))}
        </Categories>

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
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    //elementos que se necesitan del estado
    news: state.news,
    categories: state.categories,
    offers: state.offers,
    products: state.offers,
  };
};
export default connect(
  mapStateToProps,
  null
)(Home);
