import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: "",
  login: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Loading: (state, action) => {
      state.loading = true;
    },

    getUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    Error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    Logins: (state) => {
      state.login = true;
    },
    Logouts: (state) => {
      state.login = false;
    },
  },
});

export const { Loading, getUser, Error, Logins, Logouts } = userSlice.actions;

export default userSlice.reducer;
