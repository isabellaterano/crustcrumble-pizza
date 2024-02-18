import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-red-700 px-4 py-4 text-sm uppercase text-red-50 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <NavLink to="/cart">Open cart &rarr;</NavLink>
    </div>
  );
}

export default CartOverview;
