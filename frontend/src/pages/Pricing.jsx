import { Link } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";

import Logo from "../../public/logo/triage-logo.png";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description:
        "For developers who want to explore Triage and debug smaller problems.",
      button: "Get Started",
      link: "/signup",
      popular: false,
      features: [
        "AI debugging conversations",
        "Code and error input",
        "Basic debugging context",
        "Chat history",
        "Pinned conversations",
      ],
    },

    {
      name: "Pro",
      price: "₹499",
      period: "/ month",
      description:
        "For developers working on larger projects who need deeper debugging context.",
      button: "Start with Pro",
      link: "/signup",
      popular: true,
      features: [
        "Everything in Starter",
        "File and screenshot context",
        "Repository-based debugging",
        "Deeper AI investigation",
        "Source-aware responses",
        "Extended chat history",
      ],
    },

    {
      name: "Team",
      price: "₹1,499",
      period: "/ month",
      description:
        "For development teams that want to investigate problems together.",
      button: "Join Waitlist",
      link: "/signup",
      popular: false,
      features: [
        "Everything in Pro",
        "Shared team workspace",
        "Team debugging history",
        "Shared repository context",
        "Member management",
        "Team collaboration tools",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">

      {/* Navbar */}
      <nav className="border-b border-white/10 px-6 py-5 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={Logo}
              alt="Triage"
              className="h-8 w-8 object-contain"
            />

            <span className="text-xl font-semibold">
              Triage
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-16 pt-20 text-center md:px-10">
        <div className="mx-auto max-w-4xl">

          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Pricing
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Start simple.
            <br />

            <span className="text-slate-400">
              Scale when you need more.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Choose the level of debugging context that fits the way you work.
            Upgrade when your projects and investigations become more complex.
          </p>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-8 ${
                plan.popular
                  ? "border-white/40 bg-white/10"
                  : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
            >

              {/* Popular */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-medium text-black">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div>
                <p className="text-sm font-medium text-slate-300">
                  {plan.name}
                </p>

                <div className="mt-5 flex items-end gap-2">
                  <h2 className="text-4xl font-semibold text-white">
                    {plan.price}
                  </h2>

                  {plan.period && (
                    <span className="pb-1 text-sm text-slate-500">
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="mt-5 min-h-20 text-sm leading-7 text-slate-400">
                  {plan.description}
                </p>
              </div>

              {/* Button */}
              <Link
                to={plan.link}
                className={`mt-7 flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-white text-black hover:bg-slate-200"
                    : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                }`}
              >
                {plan.button}
              </Link>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10"></div>

              {/* Features */}
              <div className="flex-1">
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Includes
                </p>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">
                        <Check size={12} />
                      </div>

                      <span className="text-sm leading-6 text-slate-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Bottom Note */}
      <section className="border-t border-white/10 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Built to grow with you
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white">
            Not sure which plan fits?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Start with the free plan and move to a larger plan when your
            debugging workflow needs more context.
          </p>

          <Link
            to="/signup"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-xl"
          >
            Start with Triage
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Pricing;