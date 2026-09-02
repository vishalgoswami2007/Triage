import { Link } from "react-router-dom";
import Logo from "../../../public/logo/triage-logo.png"

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="Triage Logo"
          className="h-15 w-15 cursor-pointer"
        />

        <span className="text-xl font-semibold text-white cursor-pointer">
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

        <Link to="/pricing" className="hover:text-white">
          Pricing
        </Link>
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