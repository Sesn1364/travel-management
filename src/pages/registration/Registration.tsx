// Registration Page

import { useDispatch, useSelector } from "react-redux";
import {
  sendUserInfoToDb,
  userInformation,
  resetForm,
} from "../../redux/slices/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/button";
import AuthFooter from "../../components/common/auth-footer/AuthFooter";
import AuthHeader from "../../components/common/auth-header/AuthHeader";

const Registration = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authData = useSelector((state: RootState) => state.auth);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      userInformation({
        name: e.target.name,
        value: e.target.value,
      }),
    );
  };

  useEffect(() => {
    if (authData.errorMassage) {
      toast.error(authData.errorMassage);
    }
  }, [authData.errorMassage]);

  const submitForRegistration = () => {
    dispatch(
      sendUserInfoToDb({
        username: authData.username,
        email: authData.email,
        password: authData.password,
        confirmPassword: authData.confirmPassword,
      }),
    );
    dispatch(resetForm());
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
          {/* Header */}
          <AuthHeader
            title="Create Account"
            description="Join us and start your journey"
          />

          {/* Form */}
          <form className="space-y-5" autoComplete="off">
            {/* Username */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Username
              </label>

              <Input
                type="text"
                name="username"
                value={authData.username}
                onChange={inputHandler}
                placeholder="Choose a username"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">Email</label>

              <Input
                type="email"
                name="email"
                value={authData.email}
                onChange={inputHandler}
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Password
              </label>

              <Input
                type="password"
                name="password"
                value={authData.password}
                onChange={inputHandler}
                placeholder="Create a password"
                className="focus:ring-purple-400"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Confirm Password
              </label>

              <Input
                type="password"
                name="confirmPassword"
                value={authData.confirmPassword}
                onChange={inputHandler}
                placeholder="Repeat your password"
                className="focus:ring-purple-400"
              />
            </div>

            {/* Button */}
            <Button type="button" onClick={submitForRegistration}>
              Create Account
            </Button>
          </form>

          {/* Footer */}
          <AuthFooter text="Already have an account?" linkText="Login" to="/" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
