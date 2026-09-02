import { Link } from "react-router-dom";

import Logo from "../../public/logo/triage-logo.png";
import SignupVideo from "../../public/video/Background.mp4";

function Signup() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0b0f14] px-4 py-4">

      {/* Background Video */}
      <video
        src={SignupVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-black/75 px-6 py-4 shadow-2xl backdrop-blur-md">

        {/* Logo */}
        <Link
          to="/"
          className="mb-2 flex items-center justify-center gap-2"
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
            Get Started
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-white">
            Create your account
          </h1>

          <p className="mt-1 text-xs text-slate-400">
            Start investigating bugs with better context.
          </p>
        </div>

        {/* Google */}
        <button
          type="button"
          className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
        >
          {/* Google Logo */}
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
        <div className="my-2 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>

          <span className="text-xs uppercase tracking-wider text-slate-600">
            or
          </span>

          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Form */}
        <form className="space-y-2">

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-xs text-slate-300"
            >
              Full name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

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
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-xs text-slate-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1 block text-xs text-slate-300"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-white/40 focus:bg-black/60"
            />
          </div>

          {/* Create Account */}
          <button
            type="submit"
            className="mt-1 w-full rounded-xl bg-white px-4 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-xl"
          >
            Create Account
          </button>

        </form>

        {/* Sign In */}
        <p className="mt-2 text-center text-xs text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-white transition hover:text-slate-300"
          >
            Sign in
          </Link>
        </p>

        {/* Terms */}
        <p className="mt-1 text-center text-xs leading-4 text-slate-600">
          By creating an account, you agree to the Terms of Service
          and Privacy Policy.
        </p>

      </div>
    </main>
  );
}

export default Signup;