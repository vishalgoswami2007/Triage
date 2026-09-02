import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../../public/logo/triage-logo.png"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f14] px-6 pb-8 pt-16 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="border-t border-white/10 pt-14">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                 <img
                           src={Logo}
                           alt="Triage Logo"
                           className="h-11 w-11 cursor-pointer"
                         />
                </div>

                <span className="text-xl font-semibold text-white">
                  Triage
                </span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                An AI-powered developer debugging platform designed to help
                developers investigate errors, understand their context, and
                move toward clearer solutions.
              </p>

              {/* Development Status */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-white"></span>

                <span className="text-xs text-slate-400">
                  Triage is in development
                </span>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-medium text-white">
                Product
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="#product"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Overview
                </a>

                <a
                  href="#features"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Features
                </a>

                <a
                  href="#how-it-works"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  How It Works
                </a>

                <Link
                  to="/signup"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-medium text-white">
                Resources
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                <span className="text-sm text-slate-600">
                  Documentation
                </span>

                <span className="text-sm text-slate-600">
                  Changelog
                </span>

                <span className="text-sm text-slate-600">
                  Help Center
                </span>

                <span className="text-sm text-slate-600">
                  API
                </span>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-medium text-white">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                <span className="text-sm text-slate-600">
                  About
                </span>

                <a
                  href="mailto:AerqonBusiness@gmail.com"
                  className="text-sm text-slate-500 transition hover:text-white"
                >
                  Contact
                </a>

                <span className="text-sm text-slate-600">
                  Privacy
                </span>

                <span className="text-sm text-slate-600">
                  Terms
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Social Row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">

          <p className="max-w-xl text-sm text-slate-500">
            Built for developers who want to understand the bug,
            not just copy the fix.
          </p>

          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/vishalgoswami2007"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vishal-goswami-81422136b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FaLinkedinIn size={17} />
            </a>

            {/* Email */}
            <a
              href="mailto:AerqonBusiness@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <Mail size={17} />
            </a>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">

          <p className="text-xs text-slate-600">
            © {year} Triage. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <span className="text-xs text-slate-600">
              AI Developer Debugging Platform
            </span>

            <a
              href="#"
              className="flex items-center gap-1 text-xs text-slate-500 transition hover:text-white"
            >
              Back to top
              <ArrowUpRight size={13} />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;