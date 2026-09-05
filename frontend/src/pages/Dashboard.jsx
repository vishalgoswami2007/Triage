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

  const [recentChats, setRecentChats] = useState([]);
  const [pinnedChats, setPinnedChats] = useState([]);

  const [currentChat, setCurrentChat] = useState(null);

  const [showSearch, setShowSearch] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleSendMessage = (message , attachments = []) => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      role: "user",
      content: message,
      attachments,
    };

    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages);

    // First message creates a chat
    if (!currentChat) {
      const newChat = {
        id: Date.now(),
        title:
          message.length > 35
            ? message.slice(0, 35) + "..."
            : message,
        messages: updatedMessages,
      };

      setCurrentChat(newChat);

      setRecentChats((prevChats) => [
        newChat,
        ...prevChats,
      ]);
    } else {
      const updatedChat = {
        ...currentChat,
        messages: updatedMessages,
      };

      setCurrentChat(updatedChat);

      setRecentChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === updatedChat.id
            ? updatedChat
            : chat
        )
      );

      setPinnedChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === updatedChat.id
            ? updatedChat
            : chat
        )
      );
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentChat(null);
  };

  const handleOpenChat = (chat) => {
    setCurrentChat(chat);
    setMessages(chat.messages);
  };

  const handlePinChat = () => {
  if (!currentChat) return;

  const alreadyPinned = pinnedChats.some(
    (chat) => chat.id === currentChat.id
  );

  if (alreadyPinned) {
    setPinnedChats((prevChats) =>
      prevChats.filter(
        (chat) => chat.id !== currentChat.id
      )
    );

    return;
  }

  setPinnedChats((prevChats) => [
    currentChat,
    ...prevChats,
  ]);
};

  const handleDeleteChat = () => {
    if (currentChat) {
      setRecentChats((prevChats) =>
        prevChats.filter(
          (chat) => chat.id !== currentChat.id
        )
      );

      setPinnedChats((prevChats) =>
        prevChats.filter(
          (chat) => chat.id !== currentChat.id
        )
      );
    }

    setMessages([]);
    setCurrentChat(null);
    setShowDelete(false);
  };

  const isCurrentChatPinned = currentChat
  ? pinnedChats.some(
      (chat) => chat.id === currentChat.id
    )
  : false;

  return (
    <main className="flex h-screen overflow-hidden bg-[#0b0f14] text-white">

      <Sidebar
        onNewChat={handleNewChat}
        onSearch={() => setShowSearch(true)}
        recentChats={recentChats}
        pinnedChats={pinnedChats}
        onOpenChat={handleOpenChat}
        currentChat={currentChat}
      />

      <section className="flex min-w-0 flex-1 flex-col">

        <ChatHeader
          currentChat={currentChat}
          onShare={() => setShowShare(true)}
          onDelete={() => setShowDelete(true)}
          onPin={handlePinChat}
           isPinned={isCurrentChatPinned}
        />

        <ChatArea messages={messages} />

        <ChatInput
          onSendMessage={handleSendMessage}
        />

      </section>

      <SearchModal
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        recentChats={recentChats}
        pinnedChats={pinnedChats}
        onOpenChat={handleOpenChat}
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