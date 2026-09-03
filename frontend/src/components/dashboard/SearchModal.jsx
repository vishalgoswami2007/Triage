import { useMemo, useState } from "react";
import { Search, X, MessageSquare } from "lucide-react";

function SearchModal({
  isOpen,
  onClose,
  recentChats,
  pinnedChats,
  onOpenChat,
}) {
  const [query, setQuery] = useState("");

  const chats = useMemo(() => {
    const mergedChats = [...pinnedChats, ...recentChats];

    const uniqueChats = mergedChats.filter(
      (chat, index, self) =>
        index === self.findIndex((item) => item.id === chat.id)
    );

    if (!query.trim()) {
      return uniqueChats;
    }

    return uniqueChats.filter((chat) =>
      chat.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query, pinnedChats, recentChats]);

  if (!isOpen) return null;

  const handleOpenChat = (chat) => {
    onOpenChat(chat);
    setQuery("");
    onClose();
  };

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 px-4 pt-24 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-[#11161d] shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h2 className="text-base font-medium text-white">
              Search chats
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Find a previous debugging investigation
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4">
            <Search
              size={18}
              className="shrink-0 text-slate-500"
            />

            <input
              type="text"
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search chats..."
              className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto px-4 pb-4">

          {chats.length > 0 ? (
            <div className="space-y-1">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  type="button"
                  onClick={() => handleOpenChat(chat)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/10"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <MessageSquare
                      size={16}
                      className="text-slate-400"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm text-slate-200">
                      {chat.title}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-600">
                      Debugging investigation
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search
                size={28}
                className="mb-3 text-slate-700"
              />

              <p className="text-sm text-slate-400">
                No chats found
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Try searching with a different title
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default SearchModal;