// authThunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RegisterUserType , LoginUserType } from "./authTypes";

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