// authSlice

import { createSlice } from "@reduxjs/toolkit";
import {sendUserInfoToDb , sendLoginInfoToDb} from "./authThunk"
import type { AuthStateType } from "./authTypes";

const initialState: AuthStateType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errorMassage: "",
};

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

    clearError: (state) => {
      state.errorMassage = "";
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

export const { userInformation, resetForm , clearError  } = authSlice.actions;
export default authSlice.reducer;
