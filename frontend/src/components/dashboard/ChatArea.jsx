import {
  Bot,
  User,
  AlertTriangle,
  Copy,
  CheckCircle2,
} from "lucide-react";

function ChatArea() {
  return (
    <section className="flex-1 overflow-y-auto px-5 py-6 md:px-8">

      <div className="mx-auto w-full max-w-3xl space-y-6">

        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-2xl">

            <div className="mb-2 flex items-center justify-end gap-2">
              <span className="text-xs text-slate-500">
                You
              </span>

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                <User size={14} />
              </div>
            </div>

            <div className="rounded-2xl rounded-tr-md border border-white/10 bg-white/10 px-4 py-3">
              <p className="text-sm leading-6 text-slate-200">
                My login API is returning a 500 error when I try to sign in.
                The user exists in MongoDB but the request still fails.
              </p>
            </div>

          </div>
        </div>

        {/* Error Block */}
        <div className="flex justify-end">
          <div className="w-full max-w-2xl rounded-2xl border border-red-500/20 bg-red-500/5">

            <div className="flex items-center gap-2 border-b border-red-500/10 px-4 py-3">
              <AlertTriangle
                size={16}
                className="text-red-400"
              />

              <span className="text-xs font-medium text-red-300">
                Error output
              </span>
            </div>

            <pre className="overflow-x-auto px-4 py-4 text-xs leading-6 text-red-200">
              <code>
{`TypeError: Cannot read properties of undefined
at loginUser (controllers/authController.js:42:18)
at processTicksAndRejections`}
              </code>
            </pre>

          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start">
          <div className="w-full max-w-2xl">

            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Bot
                  size={15}
                  className="text-white"
                />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Triage
              </span>
            </div>

            <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/5 p-5">

              <p className="text-sm leading-7 text-slate-300">
                The error suggests that your login controller is trying to
                access a property from a value that is currently undefined.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Based on the error you provided, the first thing to check is
                whether the user object exists before reading properties from
                it.
              </p>

              {/* Finding */}
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4">

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={15}
                    className="text-slate-300"
                  />

                  <span className="text-xs font-medium text-white">
                    Likely cause
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A database query may be returning no user, while the code
                  continues and attempts to access a property such as
                  password or email.
                </p>

              </div>

              {/* Code Block */}
              <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/60">

                {/* Code Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">

                  <span className="text-xs text-slate-500">
                    JavaScript
                  </span>

                  <button className="flex items-center gap-2 text-xs text-slate-500 transition hover:text-white">
                    <Copy size={14} />
                    Copy
                  </button>

                </div>

                {/* Code */}
                <pre className="overflow-x-auto p-4 text-sm leading-6 text-slate-300">
                  <code>
{`const user = await User.findOne({ email });

if (!user) {
  return res.status(404).json({
    message: "User not found",
  });
}

const isPasswordValid = await user.comparePassword(password);`}
                  </code>
                </pre>

              </div>

              {/* Explanation */}
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Add the user existence check before accessing properties or
                calling methods on the returned user object. Then test the
                request again and inspect the exact value available at the
                failing line.
              </p>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default ChatArea;