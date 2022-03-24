import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user.redux";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
