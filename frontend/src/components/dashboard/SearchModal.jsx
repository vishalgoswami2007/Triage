import {
  Copy,
  Share2,
  X,
} from "lucide-react";

function ShareModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-3 backdrop-blur-sm sm:items-center sm:px-4">

      <div className="mb-3 w-full max-w-lg rounded-2xl border border-white/10 bg-[#11161d] p-4 shadow-2xl sm:mb-0 sm:p-5">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">

              <Share2
                size={18}
                className="text-slate-300"
              />

            </div>

            <div>

              <h2 className="text-base font-medium text-white">
                Share chat
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Share links will be available after backend integration.
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>

        </div>

        {/* Link */}
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 p-2">

          <input
            type="text"
            value="Share link will be generated after backend setup"
            disabled
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-xs text-slate-600 outline-none sm:text-sm"
          />

          <button
            type="button"
            disabled
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-600"
          >
            <Copy size={15} />
          </button>

        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
        >
          Done
        </button>

      </div>

    </div>
  );
}

export default ShareModal;