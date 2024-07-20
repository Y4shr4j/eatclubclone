import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassowrd from "../pages/ForgotPassowrd";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SearchProduct from "../pages/SearchProduct";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";
import OrderPage from "../pages/OrderPage";
import AllOrder from "../pages/AllOrder";
import UserPanel from "../pages/UserPanel";
import MyOrders from "../pages/OrderPage";
import MyAccount from "../pages/MyAccount";

import MerchantPanel from "../pages/MerchantPanel";
import DeliveryPanel from "../pages/DeliveryPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassowrd />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "product-category",
        element: <CategoryProduct />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "search",
        element: <SearchProduct />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-products",
            element: <AllProducts />,
          },
          {
            path: "all-orders",
            element: <AllOrder />,
          },
        ],
      },
      {
        path: "merchant-panel",
        element: <MerchantPanel />,
        children: [
          {
            path: "all-products",
            element: <AllProducts />,
          },
          {
            path: "my-orders",
            element: <MyOrders />,
          },
        ],
      },
      {
        path: "user-panel",
        element: <UserPanel />,
        children: [
          {
            path: "my-orders",
            element: <MyOrders />,
          },
          {
            path: "my-account",
            element: <MyAccount />,
          },
        ],
      },
      {
        path: "delivery-panel",
        element: <DeliveryPanel />,
        children: [
          {
            path: "my-orders",
            element: <MyOrders />,
          },
          {
            path: "my-account",
            element: <MyAccount />,
          },
        ],
      },
    ],
  },
]);

export default router;
