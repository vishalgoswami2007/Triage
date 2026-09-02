import { Link } from "react-router-dom";
import CTAVideo from "../../../public/video/cta.mp4";

function CTA() {
  return (
    <section className="bg-[#0b0f14] px-6 py-14 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/20">

          {/* Background Video */}
          <video
            src={CTAVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-14 text-center md:px-14 md:py-16">

            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Ready to debug smarter?
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Stop guessing.
              <br />
              <span className="text-slate-300">
                Start investigating.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Bring your debugging context into one place and use Triage to
              understand the problem before deciding what to change.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="rounded-full bg-white px-7 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-xl"
              >
                Start Debugging
              </Link>

              <Link
                to="/login"
                className="rounded-full border border-white/30 bg-black/20 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10"
              >
                Sign In
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;