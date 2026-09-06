import { useEffect, useRef } from "react";

import {
  Bug,
  Code2,
  FileText,
  GitBranch,
  Image,
  User,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

function ChatArea({
  messages,
  isInvestigating,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isInvestigating]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col px-4 py-8 md:px-6">

        {/* Empty State */}
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Bug
                size={25}
                className="text-slate-300"
              />
            </div>

            <h1 className="text-2xl font-medium text-white md:text-3xl">
              What are we debugging?
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
              Describe the problem or add code,
              files, screenshots, or a repository
              to begin an investigation.
            </p>

            {/* Suggestions */}
            <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">

              <SuggestionCard
                icon={<Bug size={17} />}
                title="Investigate an error"
                description="Understand what caused an error"
              />

              <SuggestionCard
                icon={<Code2 size={17} />}
                title="Debug some code"
                description="Investigate a code snippet"
              />

              <SuggestionCard
                icon={<GitBranch size={17} />}
                title="Investigate a repository"
                description="Add repository context"
              />

              <SuggestionCard
                icon={<FileText size={17} />}
                title="Review a file"
                description="Add a file for debugging context"
              />

            </div>
          </div>
        ) : (
          /* Messages */
          <div className="space-y-8 pb-4">

            {messages.map((message) => (
              <div
                key={message.id}
                className="flex justify-end"
              >
                <div className="flex max-w-3xl items-start gap-3">

                  {/* Message Content */}
                  <div className="min-w-0">

                    {/* Attachments */}
                    {message.attachments?.length > 0 && (
                      <div className="mb-2 flex flex-wrap justify-end gap-2">

                        {message.attachments.map(
                          (attachment) => (
                            <AttachmentCard
                              key={attachment.id}
                              attachment={attachment}
                            />
                          )
                        )}

                      </div>
                    )}

                    {/* Text Message */}
                    {message.content && (
                      <div className="ml-auto w-fit max-w-2xl rounded-2xl rounded-tr-md border border-white/10 bg-white/10 px-4 py-3">
                        <p className="whitespace-pre-wrap overflow-wrap: break-word text-sm leading-6 text-slate-200">
                          {message.content}
                        </p>
                      </div>
                    )}

                  </div>

                  {/* User Avatar */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                    <User
                      size={15}
                      className="text-black"
                    />
                  </div>

                </div>
              </div>
            ))}

            {/* Investigating State */}
            {isInvestigating && (
              <div className="flex justify-start">

                <div className="flex max-w-xl items-start gap-3">

                  {/* Triage Icon */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Bug
                      size={15}
                      className="text-slate-300"
                    />
                  </div>

                  {/* Loading Bubble */}
                  <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/5 px-4 py-3">

                    <div className="flex items-center gap-3">

                      <span className="text-sm text-slate-400">
                        Triage is investigating
                      </span>

                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500"></span>

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500"></span>

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500"></span>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            )}

            <div ref={bottomRef} />

          </div>
        )}

      </div>
    </div>
  );
}

/* Attachment Card */

function AttachmentCard({
  attachment,
}) {
  // File
  if (attachment.type === "file") {
    return (
      <div className="flex max-w-xs items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
          <FileText
            size={17}
            className="text-slate-400"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs text-slate-200">
            {attachment.name}
          </p>

          <p className="mt-0.5 text-xs text-slate-600">
            File
          </p>
        </div>

      </div>
    );
  }

  // Screenshot
  if (attachment.type === "screenshot") {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5">

        {attachment.preview ? (
          <img
            src={attachment.preview}
            alt={attachment.name || "Screenshot"}
            className="max-h-56 max-w-xs rounded-lg object-cover"
          />
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400">
            <Image size={16} />
            {attachment.name}
          </div>
        )}

      </div>
    );
  }

  // Code
  if (attachment.type === "code") {
    return (
      <div className="w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-black/40">

        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
          <Code2
            size={15}
            className="text-slate-500"
          />

          <span className="text-xs text-slate-500">
            Code snippet
          </span>
        </div>

        <pre className="max-h-64 overflow-auto p-4 text-left text-xs leading-5 text-slate-300">
          <code>
            {attachment.content}
          </code>
        </pre>

      </div>
    );
  }

  // GitHub
  if (attachment.type === "github") {
    return (
      <div className="flex max-w-sm items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
          <FaGithub className="text-lg text-slate-300" />
        </div>

        <div className="min-w-0 text-left">

          <p className="text-xs font-medium text-slate-300">
            GitHub Repository
          </p>

          <p className="mt-1 truncate text-xs text-slate-600">
            {attachment.url}
          </p>

        </div>

      </div>
    );
  }

  return null;
}

/* Suggestion Card */

function SuggestionCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10">

      <div className="mb-3 text-slate-400">
        {icon}
      </div>

      <p className="text-sm font-medium text-slate-200">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default ChatArea;