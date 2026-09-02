import { Link } from "react-router-dom";

import Logo from "../../public/logo/triage-logo.png";
import ForgotVideo from "../../public/video/Background.mp4";

function ForgotPassword() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0b0f14] px-4 py-4">

      {/* Background Video */}
      <video
        src={ForgotVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Forgot Password Card */}
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
            Account Recovery
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-white">
            Forgot your password?
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
            Enter your email address and we’ll send you the next step to reset
            your password.
          </p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs text-slate-300"
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

          <button
            type="submit"
            className="w-full rounded-xl bg-white px-4 py-2.5 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-xl"
          >
            Continue
          </button>

        </form>

        {/* Back to Login */}
        <p className="mt-5 text-center text-sm text-slate-400">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-medium text-white transition hover:text-slate-300"
          >
            Sign in
          </Link>
        </p>

        {/* Back Home */}
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

export default ForgotPassword;