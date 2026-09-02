import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <div className="flex items-center gap-3">
        <img
          src="/logos/triage-logo.png"
          alt="Triage Logo"
          className="h-9 w-9"
        />

        <span className="text-xl font-semibold text-white">
          Triage
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#product" className="hover:text-white">
          Product
        </a>

        <a href="#features" className="hover:text-white">
          Features
        </a>

        <a href="#how-it-works" className="hover:text-white">
          How It Works
        </a>

        <a href="#pricing" className="hover:text-white">
          Pricing
        </a>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-sm text-gray-300 hover:text-white"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;