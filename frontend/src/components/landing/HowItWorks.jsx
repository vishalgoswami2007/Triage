function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add the problem",
      text: "Share your error, code, screenshot, file, or repository context.",
    },
    {
      number: "02",
      title: "Triage investigates",
      text: "Triage looks through the available context and focuses on the relevant parts.",
    },
    {
      number: "03",
      title: "Understand the cause",
      text: "See what likely caused the issue and why the current behaviour happened.",
    },
    {
      number: "04",
      title: "Move toward the fix",
      text: "Get a suggested solution with a clearer explanation of what should change.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-[#0b0f14] px-6 py-24 md:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            How It Works
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            One problem.
            <span className="text-slate-400"> A clearer path forward.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Triage turns the debugging process into a focused investigation
            instead of a sequence of guesses.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-20">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block"></div>

          {/* Moving light */}
          <div className="absolute left-0 right-0 top-7 hidden lg:block">
            <div className="moving-dot h-2 w-2 rounded-full bg-white shadow-lg"></div>
          </div>

          {/* Steps */}
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative"
              >
                {/* Number */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-[#0b0f14]
                    text-sm
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:border-white/60
                    group-hover:text-white
                    group-hover:shadow-xl
                  "
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="
                    mt-8
                    min-h-56
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-7
                    transition-all
                    duration-300
                    group-hover:-translate-y-3
                    group-hover:border-white/30
                    group-hover:bg-white/10
                    group-hover:shadow-2xl
                  "
                >
                  <h3 className="text-xl font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {step.text}
                  </p>

                  <div className="mt-8 text-sm text-slate-600 transition-all duration-300 group-hover:translate-x-2 group-hover:text-slate-300">
                    Continue →
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;