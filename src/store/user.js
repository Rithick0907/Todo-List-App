import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
    },
    logout: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
