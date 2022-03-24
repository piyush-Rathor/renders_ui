import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  mobileNumber: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.mobileNumber = action.payload.mobileNumber || state.mobileNumber;
      state.email = action.payload.email || state.email;
      state.name = action.payload.name || state.name;
    },
  },
});
export default user.reducer;
export const userActions = user.actions;
