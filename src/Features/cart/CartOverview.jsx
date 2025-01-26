import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQauntity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQauntity = useSelector(getTotalQauntity);
  const totalCartPrice = useSelector(getTotalPrice);
  if (!totalCartQauntity) return null;
  return (
    <div className="bg-stone-800 text-stone-200 uppercase text-sm p-4 md:text-base flex justify-between items-center px-8">
      <p className="text-slate-300 font-semibold space-x-4 sm:space-x-6 ">
        <span>{totalCartQauntity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
