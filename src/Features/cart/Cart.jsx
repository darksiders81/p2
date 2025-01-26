
import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUserName } from "../users/userSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector(getUserName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-3 px-4 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3 ">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={clearCartHandler}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
