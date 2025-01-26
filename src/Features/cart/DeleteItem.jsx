/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const deleteitemHandler = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={deleteitemHandler}>
      Delete
    </Button>
  );
}
