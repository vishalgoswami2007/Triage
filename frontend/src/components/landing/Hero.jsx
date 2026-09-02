import { Link } from "react-router-dom";
import HeroVideo from "../../../public/video/illusion.mp4";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#0b0f14] px-6 py-6 md:px-10 lg:px-12">
      
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <p className="mb-7 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
            AI Developer Debugging Platform
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-white">
              Find the bug.
            </span>

            <br />

            <span className="text-slate-300">
              Understand the
            </span>

            <br />

            <span className="text-slate-400">
              why.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            Triage investigates your code, errors, files, and repositories
            to help you understand what broke, why it broke, and how to fix it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            
            <Link
              to="/signup"
              className="rounded-full bg-slate-200 px-7 py-3.5 font-medium text-black transition duration-300 hover:bg-white"
            >
              Start Debugging
            </Link>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-400 transition duration-300 hover:text-white"
            >
              See how Triage works →
            </a>

          </div>
        </div>


        {/* RIGHT SIDE VIDEO */}
        <div className="relative flex items-center justify-center">

          <div className="relative h-80 w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#858d94] shadow-2xl md:h-96 lg:h-105">

            <video
              src={HeroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />

            {/* Very subtle overlay */}
           <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_35px_rgba(255,255,255,0.12)]"></div>

          </div>

        </div>

      </div>


      {/* BOTTOM MINI FEATURES */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 border-t border-white/10 pt-8 md:grid-cols-3">

        <div>
          <h3 className="text-base font-medium text-white">
            AI-Powered Analysis
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Understand errors using the context of your code and project.
          </p>
        </div>


        <div>
          <h3 className="text-base font-medium text-white">
            Clear Explanations
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Understand what failed, why it failed, and what to fix.
          </p>
        </div>


        <div>
          <h3 className="text-base font-medium text-white">
            Repository Context
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Connect project context for deeper and more relevant debugging.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;