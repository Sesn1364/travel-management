// Login Card Component

import { useDispatch, useSelector } from "react-redux";
import { sendLoginInfoToDb, userInformation } from "../../redux/auth/authSlice";
import type { AppDispatch, RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import AuthFooter from "../../components/common/auth-footer/AuthFooter";
import AuthHeader from "../common/header/Header";
import { setCurrentUser } from "../../redux/user/userSlice";

const LoginCard = () => {
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
  const submitForLogin = async () => {
    const resultAction = await dispatch(
      sendLoginInfoToDb({
        username: authData.username,
        password: authData.password,
      }),
    );

    if (sendLoginInfoToDb.fulfilled.match(resultAction)) {
      const user = resultAction.payload.data;

      dispatch(setCurrentUser(user));

      localStorage.setItem(
        "user",
        JSON.stringify({
          user,
          loginTime: Date.now(),
        }),
      );

      navigate("/create-trip");
    }
  };

  useEffect(() => {
    if (authData.errorMassage) {
      toast.error(authData.errorMassage);
    }
  }, [authData.errorMassage]);

  return (
    <>
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <AuthHeader
          title="Welcome Back"
          description="Login to continue your journey"
          containerClassName={`text-center mb-8`}
          titleClassName={`text-4xl font-bold text-white mb-2`}
          descriptionClassName={`text-gray-300 text-sm`}
        />

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">Username</label>

            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={inputHandler}
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 transition-all focus:ring-cyan-400`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">Password</label>

            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={inputHandler}
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 transition-all focus:ring-purple-400`}
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
    </>
  );
};

export default LoginCard;
