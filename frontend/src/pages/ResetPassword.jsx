import { Link } from "react-router-dom";

import Logo from "../../public/logo/triage-logo.png";
import ResetVideo from "../../public/video/Background.mp4";

function ResetPassword() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0b0f14] px-4 py-4">

      {/* Background Video */}
      <video
        src={ResetVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Reset Password Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-black/75 px-6 py-6 shadow-2xl backdrop-blur-md">

        {/* Logo */}
        <Link
          to="/"
          className="mb-4 flex items-center justify-center gap-2"
        >
          <img
            src={Logo}
            alt="Triage"
            className="h-7 w-7 object-contain"
          />

          <span className="text-lg font-semibold text-white">
            Triage
          </span>
        </Link>

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Secure Your Account
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-white">
            Create a new password
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
            Choose a new password for your Triage account.
          </p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">

          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="mb-1.5 block text-xs text-slate-300"
            >
              New password
            </label>

            <input
              id="newPassword"
              type="password"
              placeholder="Enter your new password"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-xs text-slate-300"
            >
              Confirm new password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your new password"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

          {/* Password Hint */}
          <p className="text-xs leading-5 text-slate-500">
            Use at least 8 characters with a mix of letters, numbers,
            and symbols.
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-white px-4 py-2.5 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-xl"
          >
            Reset Password
          </button>

        </form>

        {/* Login */}
        <p className="mt-5 text-center text-sm text-slate-400">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-medium text-white transition hover:text-slate-300"
          >
            Sign in
          </Link>
        </p>

        {/* Home */}
        <div className="mt-4 text-center">
          <Link
            to="/"
            className="text-xs text-slate-500 transition hover:text-white"
          >
            ← Back to Triage
          </Link>
        </div>

      </div>
    </main>
  );
}

export default ResetPassword;