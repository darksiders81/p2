
import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
