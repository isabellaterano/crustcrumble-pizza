import LinkButton from "../../components/LinkButton";
import { Pizza } from "@phosphor-icons/react";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 flex items-center font-semibold">
        Your cart is still empty. Start adding some pizzas{" "}
        <Pizza size={36} color="#d5513f" weight="light" />
      </p>
    </div>
  );
}

export default EmptyCart;
