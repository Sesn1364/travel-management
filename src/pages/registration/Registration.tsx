// Registration Page

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  sendUserInfoToDb,
  userRegistration,
  resetForm,
} from "../../redux/slices/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Registration = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authData = useSelector((state: RootState) => state.auth);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      userRegistration({
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
    dispatch(sendUserInfoToDb(authData));
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h1>

            <p className="text-gray-300 text-sm">
              Join us and start your journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" autoComplete="off">
            {/* Username */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={authData.username}
                onChange={inputHandler}
                placeholder="Choose a username"
                className="
                                    w-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-400
                                    outline-none
                                    focus:ring-2
                                    focus:ring-cyan-400
                                    transition-all
                                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">Email</label>

              <input
                type="email"
                name="email"
                value={authData.email}
                onChange={inputHandler}
                placeholder="Enter your email"
                className="
                                    w-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-400
                                    outline-none
                                    focus:ring-2
                                    focus:ring-cyan-400
                                    transition-all
                                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={authData.password}
                onChange={inputHandler}
                placeholder="Create a password"
                className="
                                    w-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-400
                                    outline-none
                                    focus:ring-2
                                    focus:ring-purple-400
                                    transition-all
                                "
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={authData.confirmPassword}
                onChange={inputHandler}
                placeholder="Repeat your password"
                className="
                                    w-full
                                    bg-white/10
                                    border
                                    border-white/20
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                    placeholder-gray-400
                                    outline-none
                                    focus:ring-2
                                    focus:ring-purple-400
                                    transition-all
                                "
              />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={submitForRegistration}
              className="
                                w-full
                                py-3
                                rounded-xl
                                font-semibold
                                text-white
                                bg-gradient-to-r
                                from-cyan-500
                                to-purple-500
                                hover:scale-[1.02]
                                active:scale-[0.98]
                                transition-all
                                duration-300
                                shadow-lg
                                shadow-cyan-500/20
                            "
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-300 mt-6">
            Already have an account?
            <Link
              to="/"
              className="
                                text-cyan-400
                                hover:text-cyan-300
                                hover:underline
                                ml-1
                                transition-colors
                            "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
