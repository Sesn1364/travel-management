// authThunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleApiError } from "../../services/api/handleApiError";
import type { RegisterUserType, LoginUserType } from "./authTypes";
import { registerUserApi, loginUserApi } from "../../services/api/authApi";

export const sendUserInfoToDb = createAsyncThunk(
  "auth/sendUserInfoToDbStatus",
  async (userData: RegisterUserType, { rejectWithValue }) => {
    try {
      const res = await registerUserApi(userData);

      return res;
    } catch (error: unknown) {
      return rejectWithValue(handleApiError(error));
    }
  },
);

export const sendLoginInfoToDb = createAsyncThunk(
  "auth/sendLoginInfoToDbStatus",
  async (userData: LoginUserType, { rejectWithValue }) => {
    try {
      const res = await loginUserApi(userData);

      return res;
    } catch (error: unknown) {
      return rejectWithValue(handleApiError(error));
    }
  },
);
