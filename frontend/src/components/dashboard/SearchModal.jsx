import { useMemo, useState } from "react";

import {
  Search,
  X,
  MessageSquare,
  Pin,
} from "lucide-react";

function SearchModal({
  isOpen,
  onClose,
  recentChats,
  pinnedChats,
  onOpenChat,
}) {
  const [query, setQuery] = useState("");

  const chats = useMemo(() => {
    const allChats = [
      ...pinnedChats,
      ...recentChats,
    ];

    const uniqueChats = allChats.filter(
      (chat, index, array) =>
        index ===
        array.findIndex(
          (item) => item.id === chat.id
        )
    );

    return uniqueChats.filter((chat) =>
      chat.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [
    query,
    recentChats,
    pinnedChats,
  ]);

  const handleOpenChat = (chat) => {
    onOpenChat(chat);
    setQuery("");
    onClose();
  };

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-4">

      <div className="flex max-h-full w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11161d] shadow-2xl sm:max-h-[80vh]">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">

          <div>
            <h2 className="text-base font-medium text-white">
              Search chats
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Find a previous investigation
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
        <div className="p-3 sm:p-4">

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-3 sm:px-4">

            <Search
              size={17}
              className="shrink-0 text-slate-500"
            />

            <input
              type="text"
              value={query}
              onChange={(event) =>
                setQuery(
                  event.target.value
                )
              }
              placeholder="Search chats..."
              autoFocus
              className="min-w-0 w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-700"
            />

          </div>

        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto px-3 pb-4 sm:px-4">

          {chats.length > 0 ? (
            <div className="space-y-1">

              {chats.map((chat) => {
                const isPinned =
                  pinnedChats.some(
                    (item) =>
                      item.id === chat.id
                  );

                return (
                  <button
                    key={chat.id}
                    type="button"
                    onClick={() =>
                      handleOpenChat(chat)
                    }
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/10"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <MessageSquare
                        size={16}
                        className="text-slate-400"
                      />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm text-slate-200">
                        {chat.title}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-600">
                        Investigation
                      </p>

                    </div>

                    {isPinned && (
                      <Pin
                        size={14}
                        className="shrink-0 text-slate-500"
                      />
                    )}

                  </button>
                );
              })}

            </div>
          ) : (
            <div className="flex min-h-48 flex-col items-center justify-center px-4 text-center">

              <Search
                size={22}
                className="text-slate-700"
              />

              <p className="mt-3 text-sm text-slate-400">
                No chats found
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Try another search
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default SearchModal;