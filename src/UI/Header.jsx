import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";
import Username from "../Features/users/Username";

export default function Header() {
  return (
    <header className="bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 flex justify-between items-center font-pizza">
      <Link to="/" className="tracking-widest">
        fast react pizza co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
