import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import "../components/styles/App.scss";
import Category from "../components/Category";
import Tienda from "../components/Tienda"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/Tienda" component={Tienda} />

      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
