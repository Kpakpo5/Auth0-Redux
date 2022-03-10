import { createSlice } from "@reduxjs/toolkit";

const initialUserValue = { name: "", picture: "", email: "", isLoggedIn:false };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialUserValue },
  reducers: {
    userLogin: (state, action) => {
      state.value = action.payload;
    },

    userLogout: (state) => {
      state.value = initialUserValue;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;