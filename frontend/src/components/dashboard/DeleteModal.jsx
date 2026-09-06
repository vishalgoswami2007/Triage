import {
  AlertTriangle,
  Trash2,
  X,
} from "lucide-react";

function DeleteModal({
  isOpen,
  onClose,
  onDelete,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-3 backdrop-blur-sm sm:items-center sm:px-4">

      <div className="mb-3 w-full max-w-md rounded-2xl border border-white/10 bg-[#11161d] p-4 shadow-2xl sm:mb-0 sm:p-5">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10">

              <AlertTriangle
                size={18}
                className="text-red-400"
              />

            </div>

            <div>

              <h2 className="text-base font-medium text-white">
                Delete chat?
              </h2>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                This investigation will be removed from your current chat history.
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

        {/* Actions */}
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 sm:w-auto"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 sm:w-auto"
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