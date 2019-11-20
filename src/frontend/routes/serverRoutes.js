import Home from "../containers/Home";
import Register from "../containers/Register";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Category from "../components/Category";
import Tienda from "../components/Tienda"


const serverRoutes = isLogged => {
  console.log("Home islogin:", isLogged)
  return [
    {
      path: "/",
      component: Home ,
      exact: true
    },
    {
      path: "/category",
      component: Category ,
      exact: true
    },
    {
      path: "/tienda",
      component: Tienda ,
      exact: true
    },
    {
      path: "/login",
      component: Login,
      exact: true
    },
    {
      path: "/register",
      component: Register,
      exact: true
    },
    {
      name: "NotFound",
      component: NotFound
    }
  ];
};

export default serverRoutes;
