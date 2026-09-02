function ProductSection() {
  return (
    <section
      id="product"
      className="bg-[#0b0f14] px-6 py-24 md:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top Label */}
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Why Triage
        </p>

        {/* Main Heading */}
        <div className="mt-6 max-w-4xl">
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Debugging should not start
            <br />
            <span className="text-slate-400">
              with guessing.
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          Triage helps you move from a visible error to the context behind it.
          Instead of giving a generic answer, it works with the information you
          provide to understand the problem more clearly.
        </p>

        {/* Debugging Flow */}
        <div className="mt-16 grid gap-4 md:grid-cols-5">

          <div className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-3
                    hover:border-white/40
                    hover:bg-white/10
                    hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]
            ">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              01
            </span>

            <h3 className="mt-6 text-xl font-medium text-white">
              Error
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Start with the bug, stack trace, or unexpected behaviour.
            </p>
          </div>

          <div  className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:border-white/40
                        hover:bg-white/10
                        hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]
            ">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              02
            </span>

            <h3 className="mt-6 text-xl font-medium text-white">
              Context
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Add code, files, screenshots, or repository context.
            </p>
          </div>

          <div className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:border-white/40
                        hover:bg-white/10
                        hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]
            ">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              03
            </span>

            <h3 className="mt-6 text-xl font-medium text-white">
              Trace
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Triage investigates the relevant parts of the problem.
            </p>
          </div>

          <div className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-6
                            transition-all
                            duration-300
                            hover:-translate-y-3
                            hover:border-white/40
                            hover:bg-white/10
                            hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]
            ">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              04
            </span>

            <h3 className="mt-6 text-xl font-medium text-white">
              Cause
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Understand why the issue happened instead of only seeing a fix.
            </p>
          </div>

          <div className="
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-3
                                hover:border-white/40
                                hover:bg-white/10
                                hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]
            ">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              05
            </span>

            <h3 className="mt-6 text-xl font-medium text-white">
              Fix
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Get a clear suggested fix based on the available context.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductSection;