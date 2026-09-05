import { useRef, useState } from "react";
import {
  Plus,
  Send,
  FileText,
  Image,
  Code2,
  X,
  Link as LinkIcon,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const [attachments, setAttachments] = useState([]);

  const [showCodeBox, setShowCodeBox] = useState(false);
  const [codeValue, setCodeValue] = useState("");

  const [showGithubBox, setShowGithubBox] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");

  const fileInputRef = useRef(null);
  const screenshotInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const newAttachment = {
      id: Date.now(),
      type: "file",
      name: file.name,
      file,
    };

    setAttachments((prev) => [
      ...prev,
      newAttachment,
    ]);

    event.target.value = "";
    setShowOptions(false);
  };

  const handleScreenshotSelect = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    const newAttachment = {
      id: Date.now(),
      type: "screenshot",
      name: file.name,
      file,
      preview: imageUrl,
    };

    setAttachments((prev) => [
      ...prev,
      newAttachment,
    ]);

    event.target.value = "";
    setShowOptions(false);
  };

  const handleAddCode = () => {
    if (!codeValue.trim()) return;

    const newAttachment = {
      id: Date.now(),
      type: "code",
      name: "Code snippet",
      content: codeValue,
    };

    setAttachments((prev) => [
      ...prev,
      newAttachment,
    ]);

    setCodeValue("");
    setShowCodeBox(false);
  };

  const handleAddGithub = () => {
    if (!githubUrl.trim()) return;

    const newAttachment = {
      id: Date.now(),
      type: "github",
      name: githubUrl,
      url: githubUrl,
    };

    setAttachments((prev) => [
      ...prev,
      newAttachment,
    ]);

    setGithubUrl("");
    setShowGithubBox(false);
  };

  const removeAttachment = (id) => {
    setAttachments((prev) => {
      const attachment = prev.find(
        (item) => item.id === id
      );

      if (
        attachment?.type === "screenshot" &&
        attachment.preview
      ) {
        URL.revokeObjectURL(
          attachment.preview
        );
      }

      return prev.filter(
        (item) => item.id !== id
      );
    });
  };

  const sendMessage = () => {
    const cleanMessage = message.trim();

    if (
      !cleanMessage &&
      attachments.length === 0
    ) {
      return;
    }

    onSendMessage(
      cleanMessage,
      attachments
    );

    attachments.forEach((attachment) => {
      if (
        attachment.type === "screenshot" &&
        attachment.preview
      ) {
        URL.revokeObjectURL(
          attachment.preview
        );
      }
    });

    setMessage("");
    setAttachments([]);
    setShowOptions(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="border-t border-white/10 bg-[#0b0f14] px-4 py-4 md:px-6">

        <div className="mx-auto max-w-4xl">

          {/* Attachments Preview */}
          {attachments.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {attachments.map(
                (attachment) => (
                  <div
                    key={attachment.id}
                    className="relative flex max-w-xs items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {attachment.type ===
                      "file" && (
                      <FileText
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
                    )}

                    {attachment.type ===
                      "screenshot" && (
                      <img
                        src={
                          attachment.preview
                        }
                        alt="Screenshot preview"
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                    )}

                    {attachment.type ===
                      "code" && (
                      <Code2
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
                    )}

                    {attachment.type ===
                      "github" && (
                      <FaGithub className="shrink-0 text-slate-400" />
                    )}

                    <div className="min-w-0">
                      <p className="truncate text-xs text-slate-300">
                        {attachment.name}
                      </p>

                      <p className="text-xs capitalize text-slate-600">
                        {attachment.type}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeAttachment(
                          attachment.id
                        )
                      }
                      className="rounded-lg p-1 text-slate-500 transition hover:bg-white/10 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )
              )}
            </div>
          )}

          {/* Input Container */}
          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl"
          >
            <textarea
              value={message}
              onChange={(event) =>
                setMessage(
                  event.target.value
                )
              }
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Describe the bug, error, or problem..."
              className="max-h-40 min-h-12 w-full resize-none bg-transparent px-2 py-2 pr-3 text-sm text-white outline-none placeholder:text-slate-600"
            />

            <div className="mt-2 flex items-center justify-between">

              {/* Left */}
              <div className="relative">

                <button
                  type="button"
                  onClick={() =>
                    setShowOptions(
                      !showOptions
                    )
                  }
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <Plus size={19} />
                </button>

                {showOptions && (
                  <div className="absolute bottom-12 left-0 z-30 w-56 rounded-xl border border-white/10 bg-[#11161d] p-1.5 shadow-2xl">

                    <button
                      type="button"
                      onClick={() =>
                        fileInputRef.current?.click()
                      }
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <FileText size={16} />
                      Upload file
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        screenshotInputRef.current?.click()
                      }
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <Image size={16} />
                      Add screenshot
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowOptions(false);
                        setShowCodeBox(true);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <Code2 size={16} />
                      Add code
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowOptions(false);
                        setShowGithubBox(true);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <FaGithub />
                      GitHub repository
                    </button>

                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={
                    handleFileSelect
                  }
                  className="hidden"
                />

                <input
                  ref={
                    screenshotInputRef
                  }
                  type="file"
                  accept="image/*"
                  onChange={
                    handleScreenshotSelect
                  }
                  className="hidden"
                />

              </div>

              {/* Send */}
              <button
                type="submit"
                disabled={
                  !message.trim() &&
                  attachments.length === 0
                }
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={16} />
              </button>

            </div>
          </form>

          <p className="mt-2 text-center text-xs text-slate-600">
            Triage can make mistakes.
            Verify important debugging
            decisions.
          </p>

        </div>
      </div>

      {/* Add Code Modal */}
      {showCodeBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#11161d] p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-medium text-white">
                  Add code
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Paste the code you want
                  Triage to investigate
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowCodeBox(false)
                }
                className="rounded-lg p-2 text-slate-500 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <textarea
              value={codeValue}
              onChange={(event) =>
                setCodeValue(
                  event.target.value
                )
              }
              rows={12}
              placeholder="Paste your code here..."
              className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-slate-200 outline-none placeholder:text-slate-700 focus:border-white/20"
            />

            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setShowCodeBox(false)
                }
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAddCode}
                disabled={!codeValue.trim()}
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add Code
              </button>
            </div>

          </div>
        </div>
      )}

      {/* GitHub Modal */}
      {showGithubBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#11161d] p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-medium text-white">
                  Add GitHub repository
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Add a repository URL for
                  investigation
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowGithubBox(false)
                }
                className="rounded-lg p-2 text-slate-500 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4">
              <LinkIcon
                size={17}
                className="text-slate-500"
              />

              <input
                type="text"
                value={githubUrl}
                onChange={(event) =>
                  setGithubUrl(
                    event.target.value
                  )
                }
                placeholder="https://github.com/username/repository"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-700"
              />
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setShowGithubBox(false)
                }
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAddGithub}
                disabled={!githubUrl.trim()}
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add Repository
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default ChatInput;