import { X, Copy, Link2 } from "lucide-react";

function ShareModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#11161d] p-5 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Link2 size={17} className="text-slate-300" />
            </div>

            <div>
              <h2 className="text-sm font-medium text-white">
                Share Chat
              </h2>

              <p className="text-xs text-slate-500">
                Share this investigation with someone.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-white/10 hover:text-white"
          >
            <X size={17} />
          </button>

        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/10"></div>

        {/* Link */}
        <label className="mb-2 block text-xs text-slate-400">
          Share link
        </label>

        <div className="flex items-center gap-2">

          <input
            type="text"
            readOnly
            value="Share link will be generated after backend setup"
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-xs text-slate-500 outline-none"
          />

          <button
            type="button"
            disabled
            className="flex h-10 w-10 shrink-0 cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-600"
          >
            <Copy size={16} />
          </button>

        </div>

        <p className="mt-3 text-xs leading-5 text-slate-600">
          A secure shareable link will be available once chat sharing is
          connected to the backend.
        </p>

        {/* Footer */}
        <div className="mt-6 flex justify-end">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}

export default ShareModal;