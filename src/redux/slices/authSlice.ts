// authSlice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  AuthStateType,
  LoginUserType,
  RegisterUserType,
} from "../types/authSlice";

const initialState: AuthStateType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errorMassage: "",
};

export const sendUserInfoToDb = createAsyncThunk(
  "auth/sendUserInfoToDbStatus",
  async (userData: RegisterUserType, { rejectWithValue }) => {
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

export const sendLoginInfoToDb = createAsyncThunk(
  "auth/sendLoginInfoToDbStatus",
  async (userData: LoginUserType, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData,
      );

      return res.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Login failed");
      }

      return rejectWithValue("خطای ناشناخته رخ داد");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userInformation: (state, action) => {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };
    },

    resetForm: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendUserInfoToDb.fulfilled, (state) => {
        state.errorMassage = "";
      })
      .addCase(sendUserInfoToDb.rejected, (state, action) => {
        state.errorMassage = action.payload as string;
      })
      .addCase(sendLoginInfoToDb.fulfilled, (state) => {
        state.errorMassage = "";
      })
      .addCase(sendLoginInfoToDb.rejected, (state, action) => {
        state.errorMassage = action.payload as string;
      });
  },
});

export const { userInformation, resetForm } = authSlice.actions;
export default authSlice.reducer;
