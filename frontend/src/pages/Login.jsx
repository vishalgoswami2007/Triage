import { Link } from "react-router-dom";

import Logo from "../../public/logo/triage-logo.png";
import LoginVideo from "../../public/video/Background.mp4";

function Login() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0b0f14] px-4 py-4">

      {/* Background Video */}
      <video
        src={LoginVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-black/75 px-6 py-5 shadow-2xl backdrop-blur-md">

        {/* Logo */}
        <Link
          to="/"
          className="mb-3 flex items-center justify-center gap-2"
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
            Welcome Back
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-white">
            Sign in to Triage
          </h1>

          <p className="mt-1 text-xs text-slate-400">
            Continue your debugging investigation.
          </p>
        </div>

        {/* Google */}
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
        >
          <div className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-tl-full bg-blue-500"></span>
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-tr-full bg-red-500"></span>
            <span className="absolute bottom-0 left-0 h-2.5 w-2.5 rounded-bl-full bg-yellow-400"></span>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-br-full bg-green-500"></span>
            <span className="relative h-2.5 w-2.5 rounded-full bg-white"></span>
          </div>

          Continue with Google
        </button>

        {/* Divider */}
        <div className="my-3 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>

          <span className="text-xs uppercase tracking-wider text-slate-600">
            or
          </span>

          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Form */}
        <form className="space-y-3">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-xs text-slate-300"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs text-slate-300"
              >
                Password
              </label>

              <Link
                to="/forgetPassword"
                className="text-xs text-slate-400 transition hover:text-white"
              >
                Forgot password?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

          {/* Remember Me */}
          <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-400">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-white/20 bg-black"
            />

            Remember me
          </label>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-white px-4 py-2.5 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-xl"
          >
            Sign In
          </button>

        </form>

        {/* Signup */}
        <p className="mt-4 text-center text-xs text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-white transition hover:text-slate-300"
          >
            Create account
          </Link>
        </p>

      </div>
    </main>
  );
}

export default Login;