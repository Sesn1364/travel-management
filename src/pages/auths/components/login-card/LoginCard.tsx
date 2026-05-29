// Login Card Component

import { useDispatch, useSelector } from "react-redux";
import { userInformation, clearError } from "../../../../redux/auth/authSlice";
import { sendLoginInfoToDb } from "../../../../redux/auth/authThunk";
import type { AppDispatch, RootState } from "../../../../app/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Input from "../auth-input/AuthInput";
import Button from "../auth-button/AuthButton";
import AuthFooter from "../auth-footer/AuthFooter";
import AuthHeader from "../auth-header/AuthHeader";
import { setCurrentUser } from "../../../../redux/user/userSlice";

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
      const token = resultAction.payload.token; // 🔥 اضافه شد

      dispatch(setCurrentUser(user));

      // 🟡 قبلی (بدون تغییر)
      localStorage.setItem(
        "user",
        JSON.stringify({
          user,
          loginTime: Date.now(),
        }),
      );

      // 🔐 جدید (JWT)
      localStorage.setItem("token", token);

      navigate("/create-trip");
    }
  };

  useEffect(() => {
    if (authData.errorMassage) {
      toast.error(authData.errorMassage);

      dispatch(clearError());
    }
  }, [authData.errorMassage, dispatch]);

  return (
    <>
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <AuthHeader
          title="خوش آمدید"
          description="برای ادامه سفر خود وارد شوید"
          containerClassName={`text-center mb-8`}
          titleClassName={`text-4xl font-bold text-white mb-2`}
          descriptionClassName={`text-gray-300 text-sm`}
        />

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">نام کاربری</label>

            <Input
              type="text"
              name="username"
              placeholder="نام کاربری خود را وارد کنید"
              onChange={inputHandler}
              className={` focus:ring-cyan-400`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">رمز عبور</label>

            <Input
              type="password"
              name="password"
              placeholder="رمز عبور خود را وارد کنید"
              onChange={inputHandler}
              className={` focus:ring-purple-400`}
            />
          </div>

          {/* Button */}
          <Button type="button" onClick={submitForLogin}>
            ورود
          </Button>
        </form>

        {/* Footer */}
        <AuthFooter
          text="حساب کاربری ندارید؟"
          linkText="ثبت نام"
          to="/registration"
        />
      </div>
    </>
  );
};

export default LoginCard;
