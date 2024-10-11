import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import api from "../../api/baseUrl";
import { loadAuthData } from "../../utilis/loadAuthData";

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/auth/login`, loginData);

      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialAuth: (state) => {
      const { token, user } = loadAuthData();

      if (token) {
        state.token = token;
      }
      if (user) {
        state.user = user;
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user;
        state.token = action.payload?.token;

        Cookies.set("token", action.payload?.token, { expires: 7 });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { initialAuth, logout } = authSlice.actions;
export default authSlice.reducer;
