import { useState } from "react";
import { Link } from "react-router-dom";

import {
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
  Pin,
  MessageSquare,
} from "lucide-react";

import Logo from "../../../public/logo/triage-logo.png";

function Sidebar({
  onNewChat,
  onSearch,
  recentChats,
  pinnedChats,
  onOpenChat,
  currentChat,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`flex h-screen flex-col border-r border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Top */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Triage"
              className="h-8 w-8 object-contain"
            />

            <span className="text-lg font-semibold text-white">
              Triage
            </span>
          </div>
        )}

        {isCollapsed && (
          <img
            src={Logo}
            alt="Triage"
            className="h-8 w-8 object-contain"
          />
        )}

        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          {isCollapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* Main Actions */}
      <div className="space-y-2 px-3 py-4">

        {/* New Chat */}
        <button
          type="button"
          onClick={onNewChat}
          className="flex w-full items-center gap-3 rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
        >
          <Plus size={18} />

          {!isCollapsed && (
            <span>
              New Chat
            </span>
          )}
        </button>

        {/* Search */}
        <button
          type="button"
          onClick={onSearch}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          <Search size={18} />

          {!isCollapsed && (
            <span>
              Search
            </span>
          )}
        </button>

      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto px-3 pb-4">

        {/* Pinned */}
        {!isCollapsed && pinnedChats.length > 0 && (
          <div className="mt-2">

            <div className="mb-2 flex items-center gap-2 px-2 text-xs uppercase tracking-wider text-slate-600">
              <Pin size={13} />
              Pinned
            </div>

            <div className="space-y-1">
              {pinnedChats.map((chat) => (
                <button
                  key={chat.id}
                  type="button"
                  onClick={() => onOpenChat(chat)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${
                    currentChat?.id === chat.id
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <MessageSquare
                    size={16}
                    className="shrink-0"
                  />

                  <span className="truncate">
                    {chat.title}
                  </span>
                </button>
              ))}
            </div>

          </div>
        )}

        {/* Recents */}
        {!isCollapsed && recentChats.length > 0 && (
          <div className="mt-6">

            <p className="mb-2 px-2 text-xs uppercase tracking-wider text-slate-600">
              Recents
            </p>

            <div className="space-y-1">
              {recentChats.map((chat) => (
                <button
                  key={chat.id}
                  type="button"
                  onClick={() => onOpenChat(chat)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${
                    currentChat?.id === chat.id
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <MessageSquare
                    size={16}
                    className="shrink-0"
                  />

                  <span className="truncate">
                    {chat.title}
                  </span>
                </button>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* User */}
      <div className="border-t border-white/10 p-3">

        <div className="flex w-full items-center gap-3 rounded-xl p-2">

          {/* Avatar */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
            V
          </div>

          {!isCollapsed && (
            <>
              {/* User Info */}
              <div className="min-w-0 flex-1 text-left">

                <p className="truncate text-sm font-medium text-white">
                  Vishal Goswami
                </p>

                <p className="truncate text-xs text-slate-500">
                  Developer
                </p>

              </div>

              {/* Upgrade */}
              <Link
                to="/pricing"
                className="shrink-0 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Upgrade
              </Link>
            </>
          )}

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;