import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import "./index.css";
import App from "./routes/App";
import * as serviceWorker from "../serviceWorker";
import evokando from "./assets/covers/evokando.jpg"
//revisar url-loader

const initialState = {
  news: [
    {
      id: 1,
      title: "Evokando",
      subtitle: "Banda de Regge Music",
      autor: "Daniel M",
      active: true,
      cover: evokando,
      source: "evokando.pdf",
      type: "Banner"
    },
    {
      id: 2,
      title: "Anapoiland Experience",
      subtitle: "Relax & Sound",
      autor: "Daniel M",
      active: true,
      cover: "./src/assets/covers/asteroid anapoima.jpg",
      source: "./src/assets/covers/asteroid anapoima.jpg",
      type: "Video"
    },
    {
      id: 3,
      title: "La Serenata",
      subtitle: "",
      autor: "Seridores de La Madre Tierra",
      active: true,
      cover: "./src/assets/covers/la serenata portada 1.png",
      source: "./src/assets/videos/La serenata Videoclip Oficial.mp4",
      type: "Video"
    },
    {
      id: 4,
      title: "Promoción",
      subtitle: "50% descuento productos de la Banda",
      autor: "Daniel M",
      active: true,
      cover: "./src/assets/static/promo 2.jpg",
      source: "evokando.pdf",
      type: "Banner"
    }
  ],
  categories: [
    {
      idcategory: 1,
      category: "Eventos",
      image: "../assets/static/events.jpg",
      nivel: 0,
      padre: 0,
    },
    {
      idcategory: 2,
      category: "Música",
      image: "./assets/static/musica.jpg",
      nivel: 0,
      padre: 0,
    },
    {
      idcategory: 3,
      category: "Tienda",
      image: "./assets/static/moda.jpg",
      nivel: 0,
      padre: 0,
    },
  ],
  offers: [
    {
      idoffer: 1,
      title: "Pantalon",
      subtitle: "Jean Hombre",
      image: "./src/assets/static/products/PANTALONES.jpg",
      priceorig: 90000,
      price: 65000,
    },
    {
      idoffer: 2,
      title: "Camiseta",
      subtitle: "Polo",
      image: "./src/assets/static/products/CAMISETA.jpg",
      priceorig: 80000,
      price: 50000,
    },
    {
      idoffer: 3,
      title: "Discos",
      subtitle: "Latin Music",
      image: "./src/assets/static/products/DISCOS.jpg",
      priceorig: 50000,
      price: 20000,
    },
    {
      idoffer: 4,
      title: "Gorras",
      subtitle: "Avengers",
      image: "./src/assets/static/products/GORRAS.jpg",
      priceorig: 30000,
      price: 22000,
    },
    {
      idoffer: 5,
      title: "Mugs",
      subtitle: "Giff Love",
      image: "/src/assets/static/products/MUGS.jpg",
      priceorig: 20000,
      price: 15000,
    },
    {
      idoffer: 6,
      title: "Tennis Fashion",
      subtitle: "Casual",
      image: "./src/assets/static/products/TENIS.jpg",
      priceorig: 320000,
      price: 250000,
    },
    {
      idoffer: 7,
      title: "Acetato",
      subtitle: "Vintange",
      image: "./src/assets/static/products/VINILO.jpg",
      priceorig: 55000,
      price: 35000,
    }
  ],
  products: [
    {
      idproducto: 1,
      title: "Pantalon",
      subtitle: "Jean Hombre",
      image: "./src/assets/static/products/PANTALONES.jpg",
      priceorig: 90000,
      price: 65000,
    },
    {
      idproducto: 2,
      title: "Camiseta",
      subtitle: "Polo",
      image: "./src/assets/static/products/CAMISETA.jpg",
      priceorig: 80000,
      price: 50000,
    },
    {
      idproducto: 3,
      title: "Discos",
      subtitle: "Latin Music",
      image: "./src/assets/static/products/DISCOS.jpg",
      priceorig: 50000,
      price: 20000,
    },
    {
      idproducto: 4,
      title: "Gorras",
      subtitle: "Avengers",
      image: "./src/assets/static/products/GORRAS.jpg",
      priceorig: 30000,
      price: 22000,
    },
    {
      idproducto: 5,
      title: "Mugs",
      subtitle: "Giff Love",
      image: "/src/assets/static/products/MUGS.jpg",
      priceorig: 20000,
      price: 15000,
    },
    {
      idproducto: 6,
      title: "Tennis Fashion",
      subtitle: "Casual",
      image: "./src/assets/static/products/TENIS.jpg",
      priceorig: 320000,
      price: 250000,
    },
    {
      idproducto: 7,
      title: "Acetato",
      subtitle: "Vintange",
      image: "./src/assets/static/products/VINILO.jpg",
      priceorig: 55000,
      price: 35000,
    }
  ]
};
console.log(initialState)
//activar debugger redux para chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, initialState)
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
