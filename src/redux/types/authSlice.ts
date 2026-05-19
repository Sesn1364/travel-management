export interface AuthStateType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errorMassage: string;
}
export interface RegisterUserType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type LoginUserType = {
  username: string;
  password: string;
};
