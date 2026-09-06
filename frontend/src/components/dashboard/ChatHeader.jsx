import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Share2,
  MoreHorizontal,
  Pin,
  Trash2,
  Menu,
} from "lucide-react";

function ChatHeader({
  onShare,
  onDelete,
  onPin,
  currentChat,
  isPinned,
  onOpenSidebar,
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 px-3 sm:px-5 md:px-7">

      {/* Left */}
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">

        <button
          type="button"
          onClick={onOpenSidebar}
          className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white md:hidden"
        >
          <Menu size={19} />
        </button>

        <div className="min-w-0">

          <h1 className="truncate text-sm font-medium text-white">
            {currentChat?.title || "New investigation"}
          </h1>

          <p className="hidden text-xs text-slate-500 sm:block">
            Triage debugging workspace
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

        <Link
          to="/pricing"
          className="rounded-xl bg-white px-3 py-2 text-xs font-medium text-black transition hover:bg-slate-200 sm:px-4 sm:text-sm"
        >
          Upgrade
        </Link>

        <button
          type="button"
          onClick={onShare}
          className="flex items-center gap-2 rounded-xl border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-3"
        >
          <Share2 size={16} />

          <span className="hidden lg:inline">
            Share Chat
          </span>
        </button>

        <div className="relative">

          <button
            type="button"
            onClick={() =>
              setShowMenu(!showMenu)
            }
            className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <MoreHorizontal size={19} />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-11 z-30 w-44 rounded-xl border border-white/10 bg-[#11161d] p-1.5 shadow-2xl">

              <button
                type="button"
                onClick={() => {
                  setShowMenu(false);
                  onPin();
                }}
                disabled={!currentChat}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Pin size={15} />
                {isPinned
                  ? "Unpin Chat"
                  : "Pin Chat"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowMenu(false);
                  onDelete();
                }}
                disabled={!currentChat}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Trash2 size={15} />
                Delete Chat
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}

export default ChatHeader;