import { useState } from "react";
import {
  Plus,
  ArrowUp,
  FileText,
  Image,
  Code2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const sendMessage = () => {
    if (!message.trim()) return;

    onSendMessage(message);

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      sendMessage();
    }
  };

  return (
    <div className="px-4 pb-5 md:px-8">
      <div className="mx-auto max-w-3xl">

        <form
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl"
        >

          {/* Plus Menu */}
          {showOptions && (
            <div className="absolute bottom-full left-0 z-30 mb-3 w-56 rounded-2xl border border-white/10 bg-[#11161d] p-2 shadow-2xl">

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={17} />
                Add GitHub repository
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <FileText size={17} />
                Upload file
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Image size={17} />
                Add screenshot
              </button>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Code2 size={17} />
                Add code
              </button>

            </div>
          )}

          {/* Textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows="2"
            placeholder="Describe the bug, paste an error, or add context..."
            className="max-h-40 min-h-16 w-full resize-none bg-transparent px-2 py-2 text-sm leading-6 text-white outline-none placeholder:text-slate-600"
          />

          {/* Bottom Controls */}
          <div className="mt-2 flex items-center justify-between">

            <button
              type="button"
              onClick={() => setShowOptions(!showOptions)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <Plus
                size={18}
                className={`transition-transform duration-300 ${
                  showOptions ? "rotate-45" : ""
                }`}
              />
            </button>

            <button
              type="submit"
              disabled={!message.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:bg-white/20 disabled:text-slate-500"
            >
              <ArrowUp size={18} />
            </button>

          </div>
        </form>

        <p className="mt-2 text-center text-xs text-slate-600">
          Triage can make mistakes. Verify important debugging decisions.
        </p>

      </div>
    </div>
  );
}

export default ChatInput;