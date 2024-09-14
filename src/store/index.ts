import { configureStore } from "@reduxjs/toolkit";

import reducer from "../slice/defaultSlice";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
