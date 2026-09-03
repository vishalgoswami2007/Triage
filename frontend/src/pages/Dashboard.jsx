import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import ChatHeader from "../components/dashboard/ChatHeader";
import ChatArea from "../components/dashboard/ChatArea";
import ChatInput from "../components/dashboard/ChatInput";
import SearchModal from "../components/dashboard/SearchModal";
import ShareModal from "../components/dashboard/ShareModal";
import DeleteModal from "../components/dashboard/DeleteModal";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showShare, setShowShare] = useState(false);
const [showDelete, setShowDelete] = useState(false);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleDeleteChat = () => {
  setMessages([]);
  setShowDelete(false);
};

  return (
    <main className="flex h-screen overflow-hidden bg-[#0b0f14] text-white">

      <Sidebar
        onNewChat={handleNewChat}
        onSearch={() => setShowSearch(true)}
      />

      <section className="flex min-w-0 flex-1 flex-col">

        <ChatHeader onShare={() => setShowShare(true)}
        onDelete={() => setShowDelete(true)}
         />

        <ChatArea messages={messages} />

        <ChatInput onSendMessage={handleSendMessage} />

      </section>

      {/* Search */}
      <SearchModal
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
      />

      <ShareModal
        isOpen={showShare}
        onClose={() => setShowShare(false)}
    />

    <DeleteModal
  isOpen={showDelete}
  onClose={() => setShowDelete(false)}
  onDelete={handleDeleteChat}
/>

    </main>
  );
}

export default Dashboard;