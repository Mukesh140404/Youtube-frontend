import React, { useState } from "react";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto">
      {/* Card */}
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          Login to your account
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                         text-gray-900 dark:text-gray-100 outline-none focus:ring-2 
                         focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Password
            </label>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full mt-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700
                           text-gray-900 dark:text-gray-100 outline-none 
                           focus:ring-2 focus:ring-blue-500"
              />

              {/* Show/Hide Button */}
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2 top-1/2 -translate-y-1/2 
                           text-sm text-gray-500 dark:text-gray-300"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white 
                       font-semibold rounded-lg transition"
          >
            Login
          </button>

        </form>

        {/* Footer Links */}
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-4">
          <button className="hover:text-blue-600 dark:hover:text-blue-400">
            Forgot password?
          </button>

          <button className="hover:text-blue-600 dark:hover:text-blue-400">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
