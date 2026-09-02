function Features() {
  const features = [
    {
      title: "Context-Aware Debugging",
      text: "Triage works with the code, errors, files, screenshots, and repository context you provide.",
    },
    {
      title: "Repository Investigation",
      text: "Analyze relevant parts of a connected repository instead of treating the entire codebase like plain text.",
    },
    {
      title: "Source-Based Answers",
      text: "Relevant files and source references are shown when real context is available.",
    },
    {
      title: "AI Investigation",
      text: "Triage reasons through the problem step by step to identify likely causes and useful fixes.",
    },
    {
      title: "Developer-Focused Output",
      text: "Get explanations that focus on what failed, why it failed, and what should change.",
    },
    {
      title: "Built for Real Projects",
      text: "Designed for debugging workflows that go beyond simple one-line prompts and generic chatbot responses.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-[#0b0f14] px-6 py-24 md:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Features
        </p>

        <div className="mt-6 max-w-4xl">
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Built to understand
            <br />
            <span className="text-slate-400">
              the problem behind the error.
            </span>
          </h2>
        </div>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          Triage combines developer context with AI-driven investigation to
          help produce more relevant and useful debugging guidance.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-white/30
                hover:bg-white/10
                hover:shadow-2xl
              "
            >
              <span className="text-xs tracking-[0.2em] text-slate-600">
                0{index + 1}
              </span>

              <h3 className="mt-8 text-xl font-medium text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;