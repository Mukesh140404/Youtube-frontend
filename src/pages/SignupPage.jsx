import React, { useState } from "react";

export default function SignUpPage() {
  const [showPass, setShowPass] = useState(false);

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  const previewImage = (file, setPreview) => {
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen h-full w-full bg-gray-100 flex justify-center overflow-y-auto">

      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl my-2 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE IMAGE / BRANDING */}
        <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-blue-600 to-purple-600 p-6 text-white">
          <h2 className="text-3xl font-bold mb-3">Join Our Community</h2>
          <p className="text-sm text-white/80 text-center">
            Create your account and start creating amazing content.
          </p>

          <img
            src="/MytubeLogo.png"
            className="w-4/5 mt-6 rounded-xl shadow-lg object-cover"
            alt="cover"
          />
        </div>

        {/* RIGHT SIDE SIGNUP FORM */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
            Create Your Account
          </h2>

          <form className="mt-6 space-y-4">

            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full mt-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Username */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">Username</label>
              <input
                type="text"
                placeholder="Choose username"
                className="w-full mt-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">Password</label>

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full mt-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-300"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Avatar Upload */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">Avatar</label>
              <div className="flex items-center gap-3 mt-1">
                <input
                  type="file"
                  accept="image/*"
                  className="text-sm"
                  onChange={(e) => previewImage(e.target.files[0], setAvatarPreview)}
                />
                {avatarPreview && (
                  <img
                    src={avatarPreview}
                    alt="avatar preview"
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                )}
              </div>
            </div>

            {/* Cover Upload */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-300">Cover Image</label>
              <div className="flex items-center gap-3 mt-1">
                <input
                  type="file"
                  accept="image/*"
                  className="text-sm"
                  onChange={(e) => previewImage(e.target.files[0], setCoverPreview)}
                />

                {coverPreview && (
                  <img
                    src={coverPreview}
                    alt="cover preview"
                    className="w-24 h-14 rounded-md object-cover border"
                  />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
            Already have an account?{" "}
            <button className="text-blue-600 dark:text-blue-400 hover:underline">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
