import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 md:grid-cols-2">

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            AI Developer Debugging Platform
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-tight text-white md:text-6xl">
            Find the bug.
            <br />
            Understand the why.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Triage investigates your code, errors, files, and repositories
            to help you understand what broke, why it broke, and how to fix it.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/signup"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Start Debugging
            </Link>

            <a
              href="#how-it-works"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              See how Triage works →
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Built for developers who need answers, not guesses.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <video
            src="/videos/triage-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-xl rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;