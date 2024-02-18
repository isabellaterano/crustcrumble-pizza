import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Menu, { loader as menuLoader } from "./pages/menu/Menu.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CreateOrder, {
  action as createOrderAction,
} from "./pages/order/CreateOrder.jsx";
import Order, { loader as orderLoader } from "./pages/order/Order.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { action as updateOrderAction } from "./pages/order/UpdateOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <ErrorPage />,
        action: updateOrderAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
