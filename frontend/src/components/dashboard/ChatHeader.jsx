import { useState } from "react";
import { Share2, MoreHorizontal, Pin, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function ChatHeader({onShare onDelete}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 px-5 md:px-7">

      {/* Chat Title */}
      <div>
        <h1 className="text-sm font-medium text-white">
          New investigation
        </h1>

        <p className="text-xs text-slate-500">
          Triage debugging workspace
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">

        <Link
          to="/pricing"
         className="flex items-center justify-center rounded-xl border border-white/30 bg-white px-4 py-2 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200 hover:shadow-2xl"
        >
           Upgrade
         </Link>

        <button  type="button"
                 onClick={onShare}
        className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
          <Share2 size={16} />
          <span className="hidden sm:inline">Share Chat</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <MoreHorizontal size={19} />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-11 z-20 w-44 rounded-xl border border-white/10 bg-[#11161d] p-1.5 shadow-2xl">

              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                <Pin size={15} />
                Pin Chat
              </button>

              <button type="button"
                      onClick={() => {
                        setShowMenu(false);
                        onDelete();
                      }} 
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition hover:bg-white/10">
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