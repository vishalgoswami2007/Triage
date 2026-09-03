import { X, Trash2 } from "lucide-react";

function DeleteModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#11161d] p-5 shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
              <Trash2
                size={18}
                className="text-red-400"
              />
            </div>

            <div>
              <h2 className="text-base font-medium text-white">
                Delete this chat?
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                This investigation will be removed from your chat history.
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

        {/* Warning */}
        <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-3">
          <p className="text-xs leading-5 text-red-300/80">
            Once deleted, this chat cannot be restored.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          >
            <Trash2 size={15} />
            Delete Chat
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteModal;