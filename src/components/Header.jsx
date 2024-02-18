import { NavLink } from "react-router-dom";
import SearchOrder from "../pages/order/SearchOrder";
import { Pizza } from "@phosphor-icons/react";
import Username from "../pages/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-red-200 p-4 sm:px-6">
      <div className="flex items-center">
        <Pizza size={28} color="#b91c1c" />
        <NavLink className="font-extrabold text-stone-950">
          Crust <span className=" text-red-700">&</span> Crumble Pizza
        </NavLink>
      </div>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
