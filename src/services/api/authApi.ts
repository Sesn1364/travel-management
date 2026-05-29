// authApi.ts

import apiClient from "./apiClient";

import type {
  RegisterUserType,
  LoginUserType,
} from "../../redux/auth/authTypes";

export const registerUserApi = async (userData: RegisterUserType) => {
  const response = await apiClient.post("/auth/register", userData);

  return response.data;
};

export const loginUserApi = async (userData: LoginUserType) => {
  const response = await apiClient.post("/auth/login", userData);

  return response.data;
};
