import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  password: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.login = action.payload.login;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.login = null;
      state.password = null
    }
  }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;