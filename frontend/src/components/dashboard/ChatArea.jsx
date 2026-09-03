import { useEffect, useRef } from "react";

import {
  Bug,
  User,
  SearchCode,
  GitBranch,
  FileCode2,
} from "lucide-react";

function ChatArea({ messages }) {
  const bottomRef = useRef(null);

  const suggestions = [
    {
      icon: Bug,
      title: "Investigate an error",
      description: "Paste an error message or stack trace.",
    },
    {
      icon: SearchCode,
      title: "Debug some code",
      description: "Add code and explain what is going wrong.",
    },
    {
      icon: GitBranch,
      title: "Investigate a repository",
      description: "Connect repository context for deeper debugging.",
    },
    {
      icon: FileCode2,
      title: "Review a file",
      description: "Add a file and investigate the problem.",
    },
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <section className="flex-1 overflow-y-auto px-5 py-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl">

        {/* Empty State */}
        {messages.length === 0 && (
          <div className="flex min-h-full flex-col justify-center">

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Bug size={22} />
              </div>

              <h2 className="mt-5 text-3xl font-semibold text-white">
                What are we debugging?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Add an error, code, file, or repository context. Triage will
                help investigate what broke and why.
              </p>
            </div>

            {/* Suggestion Cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {suggestions.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    type="button"
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-xl"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                      <Icon
                        size={17}
                        className="text-slate-300 transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-4 text-sm font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>

          </div>
        )}

        {/* Active Messages */}
        {messages.length > 0 && (
          <div className="space-y-6">

            {messages.map((message) => (
              <div
                key={message.id}
                className="flex justify-end"
              >
                <div className="max-w-2xl">

                  {/* User */}
                  <div className="mb-2 flex items-center justify-end gap-2">

                    <span className="text-xs text-slate-500">
                      You
                    </span>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                      <User size={14} />
                    </div>

                  </div>

                  {/* Message Bubble */}
                  <div className="rounded-2xl rounded-tr-md border border-white/10 bg-white/10 px-4 py-3">
                    <p className="whitespace-pre-wrap overflow-wrap: break-word text-sm leading-6 text-slate-200">
                      {message.content}
                    </p>
                  </div>

                </div>
              </div>
            ))}

            {/* Auto Scroll */}
            <div ref={bottomRef} />

          </div>
        )}

      </div>
    </section>
  );
}

export default ChatArea;