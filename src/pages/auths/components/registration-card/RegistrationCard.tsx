// Registration Card Component

import { useDispatch, useSelector } from "react-redux";
import {userInformation , resetForm} from "../../../../redux/auth/authSlice";
import {sendUserInfoToDb} from "../../../../redux/auth/authThunk"
import type { AppDispatch, RootState } from "../../../../app/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Input from "../auth-input/AuthInput";
import Button from "../auth-button/AuthButton";
import AuthFooter from "../auth-footer/AuthFooter";
import AuthHeader from "../auth-header/AuthHeader";

const RegistrationCard = () => {
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

  const submitForRegistration = async () => {
    const resultAction = await dispatch(
      sendUserInfoToDb({
        username: authData.username,
        email: authData.email,
        password: authData.password,
        confirmPassword: authData.confirmPassword,
      }),
    );

    if (sendUserInfoToDb.fulfilled.match(resultAction)) {
      toast.success(resultAction.payload.message)
    }
    dispatch(resetForm());
  };

  return (
    <>
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <AuthHeader
          title="ایجاد حساب کاربری"
          description="به ما بپیوندید و سفر خود را آغاز کنید"
          containerClassName={`text-center mb-8`}
          titleClassName={`text-4xl font-bold text-white mb-2`}
          descriptionClassName={`text-gray-300 text-sm`}
        />

        {/* Form */}
        <form className="space-y-5" autoComplete="off">
          {/* Username */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">نام کاربری</label>

            <Input
              type="text"
              name="username"
              value={authData.username}
              onChange={inputHandler}
              placeholder="انتخاب نام کاربری"
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 transition-all focus:ring-cyan-400`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">ایمیل</label>

            <Input
              type="email"
              name="email"
              value={authData.email}
              onChange={inputHandler}
              placeholder="ایمیل خود راوارد کنید"
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 transition-all focus:ring-cyan-400`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">رمز عبور</label>

            <Input
              type="password"
              name="password"
              value={authData.password}
              onChange={inputHandler}
              placeholder="ایجاد رمز عبور"
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 transition-all focus:ring-purple-400`}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-200 mb-2">
              تأیید رمز عبور
            </label>

            <Input
              type="password"
              name="confirmPassword"
              value={authData.confirmPassword}
              onChange={inputHandler}
              placeholder="رمز عبور خود را تکرار کنید"
              className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 transition-all focus:ring-purple-400`}
            />
          </div>

          {/* Button */}
          <Button type="button" onClick={submitForRegistration}>
            ایجاد حساب
          </Button>
        </form>

        {/* Footer */}
        <AuthFooter text="قبلاً حساب کاربری دارید?" linkText="ورود" to="/" />
      </div>
    </>
  );
};

export default RegistrationCard;
