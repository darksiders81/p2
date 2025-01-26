/* eslint-disable react/prop-types */

import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const decreaseHandler = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button onClick={increaseHandler} type="round">
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={decreaseHandler} type="round">
        -
      </Button>
    </div>
  );
}
