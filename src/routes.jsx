import { createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./Features/menu/Menu";
import Cart from "./Features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./Features/order/CreateOrder";
import Order, { loader as orderLoader } from "./Features/order/Order";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
