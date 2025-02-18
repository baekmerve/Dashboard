import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import productReducer from "./productSlice";
import deliveryReducer from "./deliverySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,

    product: productReducer,
    delivery: deliveryReducer,
  },
});

export default store;
