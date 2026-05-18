// authSlice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { AuthStateType } from "../types/authSlice";

const initialState: AuthStateType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errorMassage: "",
};

export const sendUserInfoToDb = createAsyncThunk(
  "auth/sendUserInfoToDbStatus",
  async (userData: AuthStateType, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        userData,
      );

      return res.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "خطای ناشناخته رخ داد",
        );
      }

      return rejectWithValue("خطای ناشناخته رخ داد");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action) => {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendUserInfoToDb.fulfilled, (state) => {
        state.errorMassage = "";
      })
      .addCase(sendUserInfoToDb.rejected, (state, action) => {
        state.errorMassage = action.payload as string;
      });
  },
});

export const { userRegistration } = authSlice.actions;
export default authSlice.reducer;
