// Login Page

import { useDispatch, useSelector } from "react-redux";
import {
  sendLoginInfoToDb,
  userInformation,
} from "../../redux/auth/authSlice";
import type { AppDispatch, RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import AuthFooter from "../../components/common/auth-footer/AuthFooter";
import AuthHeader from "../../components/common/auth-header/AuthHeader";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authData = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

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

  const submitForLogin = async () => {
    const resultAction = await dispatch(
      sendLoginInfoToDb({
        username: authData.username,
        password: authData.password,
      }),
    );

    if (sendLoginInfoToDb.fulfilled.match(resultAction)) {
      navigate("/create-trip");
    }
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
            title="Welcome Back"
            description="Login to continue your journey"
          />

          {/* Form */}
          <form className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Username
              </label>

              <Input
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={inputHandler}
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
                placeholder="Enter your password"
                onChange={inputHandler}
                className="focus:ring-purple-400"
              />
            </div>

            {/* Button */}
            <Button type="button" onClick={submitForLogin}>
              Login
            </Button>
          </form>

          {/* Footer */}
          <AuthFooter
            text="Don’t have an account?"
            linkText="Register"
            to="/registration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
