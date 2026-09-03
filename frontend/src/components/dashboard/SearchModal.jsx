import { Search, X, MessageSquare } from "lucide-react";

function SearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const chats = [
    "JWT token not refreshing",
    "React state update issue",
    "MongoDB connection error",
    "API authentication bug",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm">

      {/* Modal */}
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#11161d] shadow-2xl">

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">

          <Search
            size={18}
            className="shrink-0 text-slate-500"
          />

          <input
            type="text"
            autoFocus
            placeholder="Search your chats..."
            className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
          />

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-white/10 hover:text-white"
          >
            <X size={17} />
          </button>

        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">

          <p className="px-3 py-2 text-xs uppercase tracking-wider text-slate-600">
            Recent chats
          </p>

          {chats.map((chat) => (
            <button
              key={chat}
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/10"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <MessageSquare
                  size={15}
                  className="text-slate-400"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm text-slate-300">
                  {chat}
                </p>

                <p className="mt-0.5 text-xs text-slate-600">
                  Recent investigation
                </p>
              </div>
            </button>
          ))}

        </div>

      </div>
    </div>
  );
}

export default SearchModal;