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
      <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col px-3 py-5 sm:px-4 sm:py-8 md:px-6">

        {/* Empty State */}
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-12">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:mb-5 sm:h-14 sm:w-14">
              <Bug
                size={23}
                className="text-slate-300 sm:h-6 sm:w-6"
              />
            </div>

            <h1 className="text-xl font-medium text-white sm:text-2xl md:text-3xl">
              What are we debugging?
            </h1>

            <p className="mt-3 max-w-md px-2 text-sm leading-6 text-slate-500 sm:max-w-lg">
              Describe the problem or add code,
              files, screenshots, or a repository
              to begin an investigation.
            </p>

            {/* Suggestions */}
            <div className="mt-7 grid w-full max-w-2xl grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2">

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
          <div className="space-y-6 pb-4 sm:space-y-8">

            {messages.map((message) => (
              <div
                key={message.id}
                className="flex justify-end"
              >
                <div className="flex max-w-full items-start gap-2 sm:max-w-3xl sm:gap-3">

                  {/* Message Content */}
                  <div className="min-w-0 max-w-full">

                    {/* Attachments */}
                    {message.attachments?.length > 0 && (
                      <div className="mb-2 flex max-w-full flex-wrap justify-end gap-2">

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
                      <div className="ml-auto w-fit max-w-xs rounded-2xl rounded-tr-md border border-white/10 bg-white/10 px-3 py-2.5 sm:max-w-2xl sm:px-4 sm:py-3">

                        <p className="whitespace-pre-wrap overflow-wrap: break-word text-sm leading-6 text-slate-200">
                          {message.content}
                        </p>

                      </div>
                    )}

                  </div>

                  {/* User Avatar */}
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">

                    <User
                      size={14}
                      className="text-black"
                    />

                  </div>

                </div>
              </div>
            ))}

            {/* Investigating State */}
            {isInvestigating && (
              <div className="flex justify-start">

                <div className="flex max-w-full items-start gap-2 sm:max-w-xl sm:gap-3">

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-8 sm:w-8">

                    <Bug
                      size={14}
                      className="text-slate-300"
                    />

                  </div>

                  <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3">

                    <div className="flex items-center gap-2 sm:gap-3">

                      <span className="text-xs text-slate-400 sm:text-sm">
                        Triage is investigating
                      </span>

                      <div className="flex items-center gap-1">

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />

                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />

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

function AttachmentCard({
  attachment,
}) {
  /* File */
  if (attachment.type === "file") {
    return (
      <div className="flex max-w-56 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 sm:max-w-xs sm:gap-3 sm:py-2.5">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 sm:h-9 sm:w-9">

          <FileText
            size={16}
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

  /* Screenshot */
  if (attachment.type === "screenshot") {
    return (
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5">

        {attachment.preview ? (
          <img
            src={attachment.preview}
            alt={attachment.name || "Screenshot"}
            className="max-h-44 max-w-56 rounded-lg object-cover sm:max-h-56 sm:max-w-xs"
          />
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400">

            <Image size={16} />

            <span className="max-w-40 truncate">
              {attachment.name}
            </span>

          </div>
        )}

      </div>
    );
  }

  /* Code */
  if (attachment.type === "code") {
    return (
      <div className="w-full max-w-xs overflow-hidden rounded-xl border border-white/10 bg-black/40 sm:max-w-xl">

        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 sm:px-4">

          <Code2
            size={15}
            className="text-slate-500"
          />

          <span className="text-xs text-slate-500">
            Code snippet
          </span>

        </div>

        <pre className="max-h-52 overflow-auto p-3 text-left text-xs leading-5 text-slate-300 sm:max-h-64 sm:p-4">
          <code>
            {attachment.content}
          </code>
        </pre>

      </div>
    );
  }

  /* GitHub */
  if (attachment.type === "github") {
    return (
      <div className="flex max-w-64 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 sm:max-w-sm sm:gap-3 sm:px-4 sm:py-3">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 sm:h-9 sm:w-9">

          <FaGithub className="text-base text-slate-300 sm:text-lg" />

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

function SuggestionCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-left transition hover:bg-white/10 sm:p-4">

      <div className="mb-2 text-slate-400 sm:mb-3">
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