import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/user/userSlice";
import cartReducer from "./pages/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
